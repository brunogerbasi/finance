import { useEffect, useState } from 'react'
import { fetchFinanceData, FinanceResponse } from '../../services/finance'

import {
  CurrencyName,
  CurrencyValue,
  DashboardContainer,
  Icon,
  QuoteItem,
  QuoteList,  
} from './Dashboard.styles'
import Currency from '../../components/common/Currency/Currency'
import Header from '../../components/layout/Header/Header'
import Title from '../../components/layout/Title/Title'
import Footer from '../../components/layout/Footer/Footer'
import Loading from '../../components/layout/Loading/Loading'

const Dashboard= () => {  
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
    return <DashboardContainer><Loading /></DashboardContainer>
  }

  if (!financeData) {
    return <DashboardContainer>Erro ao carregar os dados.</DashboardContainer>
  }

  const { currencies } = financeData.results

  return (
    <>
      <Header />
    
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
                <CurrencyValue $variation={currency.variation}>
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

      <Footer />
    </>
  )
}

export default Dashboard
