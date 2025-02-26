import { ButtonHTMLAttributes } from 'react'
import { Button as StyledButton } from './Button.styles'

const ButtonPrimary = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props} />
}

export default ButtonPrimary