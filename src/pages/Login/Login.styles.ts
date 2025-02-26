
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'
import rem from '../../utils/rem'
import bgimg from '../../assets/images/bg-finance.png'
import theme from '../../assets/styles/theme'

export const ContainerLogin = styled.div`
  display: flex; 
  min-height: 100vh;  
  width: 100%; 
`
export const LoginColLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  width: 45%;
  background-color: ${theme.colors.background};  
`
export const LoginLeftContent= styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width:  400px;
`
export const LoginLogo= styled.img`
  
`
export const LoginColRight= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  width:55%;  
  background-color: ${theme.colors.primary};
  background-image: url(${bgimg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${rem(32)};    
  width: 100%;
`
export const RegisterText = styled.p`
  margin-top: ${rem(16)};
  text-align: center;
  font-size: ${theme.typography.small};
  color: ${theme.colors.textSecondary};
`
export const StyledLink = styled(RouterLink)`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`
export const LoginRightContent = styled.div`
  width: 100%;
  padding: ${rem(10)} ${rem(50)};
  text-align: center;
`
export const LoginTitle = styled.h2`
  font-size: ${rem(40)};
  color: ${theme.colors.textLigth};
  text-shadow: 4px 4px 2px rgba(0,0,0,0.06);  
  margin-bottom: ${rem(18)};
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 300px;
    background-color: ${theme.colors.textLigth};
  }
`
export const LoginSubtitle = styled.h3`
  font-size: ${theme.typography.h3};
  color: ${theme.colors.textLigth};
  text-shadow: 4px 4px 2px rgba(0,0,0,0.06);
`