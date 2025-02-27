import styled from 'styled-components'
import theme from '../../../assets/styles/theme'
import rem from '../../../utils/rem'
import { RiLogoutBoxRLine } from 'react-icons/ri'

export const ContentHeader = styled.header`
  background-color: ${theme.colors.surface};
  min-height: 70px;
  width: 100%;
  padding: ${rem(10)} ${rem(30)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const HeaderLogo = styled.img`
  width: 100%;
  max-width: 90px;
`
export const User = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
`
export const UserName = styled.p`
  font-size: ${rem(20)} ;
`

export const LogoutIcon = styled(RiLogoutBoxRLine)`
  cursor: pointer;
  font-size: ${rem(24)}; 
  color: ${theme.colors.text};
`
