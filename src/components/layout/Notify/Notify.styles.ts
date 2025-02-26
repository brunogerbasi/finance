import styled from 'styled-components'
import rem from '../../../utils/rem'
import theme from '../../../assets/styles/theme'

export const Alert = styled.p`
  font-size:  ${rem(13)};   
  color: ${theme.colors.error};
  margin-top: ${rem(5)}; 
`