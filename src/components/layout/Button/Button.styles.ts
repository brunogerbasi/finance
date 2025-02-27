import styled from 'styled-components'
import rem from '../../../utils/rem'
import theme from '../../../assets/styles/theme'

export const Button = styled.button`
  padding: ${rem(8)} ${rem(16)};
  border-radius: ${rem(4)};
  border: none;
  background-color: ${theme.colors.primary};
  color: ${theme.colors.surface};
  font-weight: bold;
  cursor: pointer;
`