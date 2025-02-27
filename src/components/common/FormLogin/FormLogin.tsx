
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../../../store/userStore'
import Label from '../../layout/Label/Label'
import Input from '../../layout/Input/Input'
import ButtonPrimary from '../../layout/Button/Button'
import { Form, RegisterText, StyledLink } from './FormLogin.styles'
import Notify from '../../layout/Notify/Notify'

interface FormLoginProps {    
    toggleForm: () => void
}

const FormLogin = ({ toggleForm }: FormLoginProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msgError, setMsgError] = useState('')

  const storedUser = useUserStore((state) => state.user)
  const login = useUserStore((state) => state.login)
  const navigate = useNavigate()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setMsgError('')

    if (!storedUser || !storedUser.email) {
      setMsgError('Nenhum usuário registrado. Por favor, cadastre-se!')
      return
    }

    if (storedUser.email === email && storedUser.password === password) {
      login()
      navigate('/dashboard')
    } else {
      setMsgError('Credenciais inválidas!')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>   
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
      {
        msgError && (
          <Notify msg={msgError} />
        )
      }
      <RegisterText>
            Não tem cadastro? <StyledLink onClick={toggleForm}>Registre-se</StyledLink>
      </RegisterText>
    </Form>      
  )
}

export default FormLogin
