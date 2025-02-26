import React, { useEffect, useState } from 'react'
import useLogout from '../../hooks/useLogout'
import { fetchFinanceData, FinanceResponse } from '../../services/finance'

import {
  CurrencyName,
  CurrencyValue,
  DashboardContainer,
  Icon,
  QuoteItem,
  QuoteList,
  Title
} from './Dashboard.styles'
import Currency from '../../components/common/Currency/Currency'

const Dashboard: React.FC = () => {
  useLogout(5 * 60 * 1000)
  const [financeData, setFinanceData] = useState<FinanceResponse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedCurrency, setSelectedCurrency] = useState<{ key: string; name: string } | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFinanceData()
        setFinanceData(data)
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <DashboardContainer>Carregando...</DashboardContainer>
  }

  if (!financeData) {
    return <DashboardContainer>Erro ao carregar os dados.</DashboardContainer>
  }

  const { currencies } = financeData.results

  return (
    <DashboardContainer>
      <Title>Cotações</Title>
      <QuoteList>
        {Object.entries(currencies)
          .filter(([key]) => key !== 'source') 
          .map(([key, currency]) => (
            <QuoteItem
              key={key}
              onClick={() => setSelectedCurrency({ key, name: currency.name })}
            >
              <CurrencyName>
                {currency.name} ({key})
              </CurrencyName>
              <CurrencyValue variation={currency.variation}>
                {currency.buy.toFixed(4)}
                <Icon>{currency.variation >= 0 ? '▲' : '▼'}</Icon>
              </CurrencyValue>
            </QuoteItem>
          ))}
      </QuoteList>

      {selectedCurrency && (
        <Currency
          currencyKey={selectedCurrency.key}
          currencyName={`${selectedCurrency.name} (${selectedCurrency.key})`}
          onClose={() => setSelectedCurrency(null)}
        />
      )}
    </DashboardContainer>
  )
}

export default Dashboard
