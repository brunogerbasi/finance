
import { useState } from 'react'
import useUserStore from '../../../store/userStore'
import Label from '../../layout/Label/Label'
import Input from '../../layout/Input/Input'
import ButtonPrimary from '../../layout/Button/Button'
import { Form, RegisterText, StyledLink } from './FormRegister.styles'

interface FormRegisterProps {
  toggleForm: () => void
}
const FormRegister = ({ toggleForm }: FormRegisterProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const setUser = useUserStore((state) => state.setUser)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
   
    const newUser = { name, email, password }
    setUser(newUser)
    toggleForm()
   
  }

  return (
    <Form onSubmit={handleSubmit}>   
      <Label htmlFor="name">Nome</Label>
      <Input
        type="text"
        id="name"
        value={name}
        placeholder="Digite seu nome"
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Label htmlFor="email">E-mail</Label>
      <Input
        type="email"
        id="email"
        value={email}
        placeholder="Digite seu e-mail"
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
      
      <ButtonPrimary type="submit">Cadastrar</ButtonPrimary>
      <RegisterText>
        Já tem cadastro? <StyledLink onClick={toggleForm}>Entrar</StyledLink>
      </RegisterText>
    </Form>      
  )
}

export default FormRegister
