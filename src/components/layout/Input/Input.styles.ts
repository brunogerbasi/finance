import styled from 'styled-components'
import rem from '../../../utils/rem'
import theme from '../../../assets/styles/theme'

export const Input = styled.input`
  padding: ${rem(8)};
  margin-bottom: ${rem(16)};
  border: 1px solid ${theme.colors.borderInput};
  border-radius: ${rem(4)};
  font-size: ${theme.typography.small};
  &::placeholder{
   color: ${theme.colors.placeholder};
  }

`