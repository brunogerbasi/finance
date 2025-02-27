import styled from 'styled-components'
interface CurrencyValueProps {
  $variation: number
}

export const DashboardContainer = styled.div`
  padding: 2rem;
  background-color: #f5f5f5;
  min-height: calc(100vh - 112px);    
`
export const QuoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const QuoteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  cursor: pointer;
`
export const CurrencyName = styled.span`
  font-weight: bold;
`
export const CurrencyValue = styled.span<CurrencyValueProps>`
  color: ${({ $variation }) => ($variation >= 0 ? 'green' : 'red')};
  display: flex;
  align-items: center;
`
export const Icon = styled.span`
  margin-left: 0.5rem;
  font-size: 1.2rem;
`