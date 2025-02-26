
import { ContainerLogin, LoginColLeft, LoginColRight, LoginLeftContent, LoginLogo, LoginRightContent, LoginSubtitle, LoginTitle} from './Login.styles'
import Logo from './../../assets/images/logo.svg'
import FormLogin from '../../components/common/FormLogin/FormLogin'
import { useState } from 'react'
import FormRegister from '../../components/common/FormRegister/FormRgister'

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false)

  const toggleForm = () => setIsRegistering((prev) => !prev)

  return (
    <ContainerLogin>
      <LoginColLeft>
        <LoginLeftContent>
          <LoginLogo src={Logo} />
          {isRegistering ? (
            <FormRegister toggleForm={toggleForm} />
          ) : (
            <FormLogin toggleForm={toggleForm} />
          )}
        </LoginLeftContent>
        
      </LoginColLeft>
      <LoginColRight>
        <LoginRightContent>
          <LoginTitle>Investimentos com Precisão</LoginTitle>
          <LoginSubtitle>Cotações, ações e insights para você investir com inteligência e segurança</LoginSubtitle>
        </LoginRightContent>        
      </LoginColRight>      
    </ContainerLogin>
  )
}

export default Login
