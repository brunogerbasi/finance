import styled from 'styled-components'
import rem from '../../../utils/rem'
import theme from '../../../assets/styles/theme'

export const Label = styled.label`
  font-size: ${theme.typography.small};
  color: ${theme.colors.text};
  margin-bottom: ${rem(4)}; 
  width: 100%;
  display: block;
`
