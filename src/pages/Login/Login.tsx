
import { useState } from 'react'
import { ContainerLogin, Form, LoginColLeft, LoginColRight, LoginLeftContent, LoginLogo, LoginRightContent, LoginSubtitle, LoginTitle, RegisterText, StyledLink } from './Login.styles'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../../store/userStore'
import ButtonPrimary from '../../components/layout/Button/Button'
import Input from '../../components/layout/Input/Input'
import Label from '../../components/layout/Label/Label'
import Logo from './../../assets/images/logo.svg'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const storedUser = useUserStore((state) => state.user)
  const login = useUserStore((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!storedUser || !storedUser.email) {
      alert('Nenhum usuário registrado. Por favor, cadastre-se!')
      return
    }

    if (storedUser.email === email && storedUser.password === password) {
      login() 
      alert('Login realizado com sucesso!')
      navigate('/dashboard')
    } else {
      alert('Credenciais inválidas!')
    }
  }

  return (
    <ContainerLogin>
      <LoginColLeft>
        <LoginLeftContent>
          <LoginLogo src={Logo} />
          <Form onSubmit={handleSubmit}>
            {/* <Title>Login</Title> */}
            <Label htmlFor="email">E-mail</Label>
            <Input
              type="email"
              id="email"
              value={email}
              placeholder="Digite seu email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Label htmlFor="password">Senha</Label>
            <Input
              type="password"
              id="password"
              value={password}
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <ButtonPrimary type="submit">Entrar</ButtonPrimary>
            <RegisterText>
              Não tem cadastro? <StyledLink to="/register">Registre-se</StyledLink>
            </RegisterText>
          </Form>
        </LoginLeftContent>
        
      </LoginColLeft>
      <LoginColRight>
        <LoginRightContent>
          <LoginTitle>Investimentos com Precisão</LoginTitle>
          <LoginSubtitle>Cotações, ações e insights para você investir com inteligência e conquistar seu futuro</LoginSubtitle>
        </LoginRightContent>        
      </LoginColRight>      
    </ContainerLogin>
  )
}

export default Login
