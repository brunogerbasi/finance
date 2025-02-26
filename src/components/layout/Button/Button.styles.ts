import styled from 'styled-components'
import rem from '../../../utils/rem'

export const Button = styled.button`
  padding: ${rem(8)} ${rem(16)};
  border-radius: ${rem(4)};
  border: none;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.surface};
  font-weight: bold;
  cursor: pointer;
`