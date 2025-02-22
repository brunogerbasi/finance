
import { useState } from 'react'
import { Container, Form, Title, Input, Button, RegisterText, StyledLink } from './Login.styles'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../../store/userStore'

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
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Login</Title>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          value={email}
          placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Senha</label>
        <Input
          type="password"
          id="password"
          value={password}
          placeholder="Digite sua senha"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Entrar</Button>
        <RegisterText>
          Não tem cadastro? <StyledLink to="/register">Registre-se</StyledLink>
        </RegisterText>
      </Form>
    </Container>
  )
}

export default Login
