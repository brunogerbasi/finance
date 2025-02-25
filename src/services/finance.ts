import axios from 'axios'

const API_URL = 'https://api.hgbrasil.com/finance/?key=3490b54b&format=json-cors'

export interface Currency {
  name: string
  buy: number
  sell: number
  variation: number
}

export interface Stock {
  name: string
  location: string
  points: number
  variation: number
}

export interface FinanceResponse {
  results: {
    currencies: Record<string, Currency>
    stocks: Record<string, Stock>
  }
  execution_time: number
  from_cache: boolean
}

export const fetchFinanceData = async (): Promise<FinanceResponse> => {
  const response = await axios.get<FinanceResponse>(API_URL)
  return response.data
}
