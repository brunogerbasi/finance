import styled from 'styled-components'
import rem from '../../../utils/rem'

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2};
  margin-bottom: ${rem(16)};
  color: ${({ theme }) => theme.colors.text};
`