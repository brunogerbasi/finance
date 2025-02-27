import styled from 'styled-components'
import theme from '../../../assets/styles/theme'
import rem from '../../../utils/rem'

export const ContentFooter = styled.footer`
 background-color: ${theme.colors.surface}
 width: 100%;
`
export const FooterTxt = styled.p`
  text-align: center;
  font-size: ${rem(13)};
  color: ${theme.colors.textSecondary};
  padding: 10px;
`
