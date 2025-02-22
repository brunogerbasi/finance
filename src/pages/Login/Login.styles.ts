
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h2`
  margin-bottom: 1rem;
`

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  border: 1px solid #ccc;
`

export const Button = styled.button`
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`

export const RegisterText = styled.p`
  margin-top: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #666;
`

export const StyledLink = styled(RouterLink)`
  color: #007bff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`
