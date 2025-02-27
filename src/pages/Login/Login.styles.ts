
import styled from 'styled-components'
import rem from '../../utils/rem'
import bgimg from '../../assets/images/bg-finance.png'
import theme from '../../assets/styles/theme'

export const ContainerLogin = styled.div`
  display: flex; 
  height: 100vh;  
  width: 100%; 

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.primary};
    background-image: url(${bgimg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;  
    padding: ${rem(50)};
  }
`
export const LoginColLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 45%;
  border-radius: ${rem(5)};
  background-color: ${theme.colors.background};  

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    width: auto;
    height: auto;
    padding: ${rem(40)} ${rem(60)};
  }  
  @media (max-width: 475px) {
    padding: ${rem(15)} ${rem(20)};
  }
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
  @media (max-width: 475px) {
    max-width: 100px
  }
`
export const LoginColRight= styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width:55%;  
  background-color: ${theme.colors.primary};
  background-image: url(${bgimg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 900px) {
    background: none;    
    height: auto;
    width:100%;
  }
`

export const LoginRightContent = styled.div`
  width: 100%;
  padding: ${rem(10)} ${rem(50)};
  text-align: center;
  @media (max-width: 900px) {
    margin-bottom: ${rem(50)};    
  }
  @media (max-width: 475px) {
    padding: ${rem(10)} ${rem(15)};
    margin-bottom: ${rem(15)};    
  }
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

  @media (max-width: 900px) {
    font-size: ${rem(30)};
  }
  @media (max-width: 475px) {
    font-size: ${rem(22)};
    margin-bottom: ${rem(15)};
    &::before {      
      display: none;    
    }
  }
`
export const LoginSubtitle = styled.h3`
  font-size: ${theme.typography.h3};
  color: ${theme.colors.textLigth};
  text-shadow: 4px 4px 2px rgba(0,0,0,0.06);
  font-weight: normal;

  @media (max-width: 900px) {
    font-size: ${rem(25)};
  }
  @media (max-width: 475px) {
    font-size: ${rem(20)};
  }
`