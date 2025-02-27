import styled from 'styled-components'
import rem from '../../../utils/rem'
import theme from '../../../assets/styles/theme'

export const StyledTitle = styled.h2`
  font-size: ${theme.typography.h2};
  margin-bottom: ${rem(16)};
  color: ${theme.colors.text};
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: ${rem(23)}
  }  
`