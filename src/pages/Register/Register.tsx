import { useState } from 'react'
import { Container, Form, Title, Input, Button, RegisterText, StyledLink } from './Register.styles'

import { useNavigate } from 'react-router-dom'
import useUserStore from '../../store/userStore'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const setUser = useUserStore((state) => state.setUser)
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   
    const newUser = { name, email, password }
    setUser(newUser)
   
    navigate('/')
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Cadastro</Title>
        <label htmlFor="name">Nome</label>
        <Input
          type="text"
          id="name"
          value={name}
          placeholder="Digite seu nome"
          onChange={(e) => setName(e.target.value)}
          required
        />
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

        <Button type="submit">Cadastrar</Button>
        <RegisterText>
            Já tem cadastro? <StyledLink to="/">Entrar</StyledLink>
        </RegisterText>
      </Form>
    </Container>
  )
}

export default Register
