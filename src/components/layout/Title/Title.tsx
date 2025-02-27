import  { ReactNode } from 'react'
import { StyledTitle } from './Title.styles'

interface TitleProps {
  children: ReactNode
}

const Title = ({ children }: TitleProps) => {
  return <StyledTitle>{children}</StyledTitle>
}

export default Title