import React, { useEffect, useState } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import { ChartContainer, CloseButton, ChartTitle } from './Currency.styles'
import { fetchFinanceData } from '../../../services/finance'

interface DataPoint {
  time: string
  value: number
}

interface CurrencyProps {
  currencyKey: string  // ex: "USD", "EUR", etc.
  currencyName: string // Nome da moeda para exibição
  onClose: () => void
}

const Currency: React.FC<CurrencyProps> = ({ currencyKey, currencyName, onClose }) => {
  const [chartData, setChartData] = useState<DataPoint[]>([])

  useEffect(() => {
    // Função que atualiza o gráfico com o valor atual da moeda selecionada
    const updateChartData = async () => {
      try {
        const data = await fetchFinanceData()
        const currency = data.results.currencies[currencyKey]
        if (currency) {
          setChartData(prevData => [
            ...prevData,
            { time: new Date().toLocaleTimeString(), value: currency.buy }
          ])
        }
      } catch (error) {
        console.error('Erro ao atualizar dados do gráfico:', error)
      }
    }

    // Atualiza a cada 1 segundo
    const intervalId = setInterval(updateChartData, 10000)
    // Obtenha um dado logo no início
    updateChartData()

    return () => clearInterval(intervalId)
  }, [currencyKey])

  return (
    <ChartContainer>
      <CloseButton onClick={onClose}>Fechar</CloseButton>
      <ChartTitle>{currencyName} - Histórico em Tempo Real</ChartTitle>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="time" />
          <YAxis domain={['auto', 'auto']} />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}

export default Currency
