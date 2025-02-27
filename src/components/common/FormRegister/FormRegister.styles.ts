import styled from 'styled-components'
import rem from '../../../utils/rem'
import theme from '../../../assets/styles/theme'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: ${rem(32)};    
  width: 100%; 

  @media (max-width: 475px) {
    padding: ${rem(15)};    
  }
`
export const RegisterText = styled.p`
  margin-top: ${rem(16)};
  text-align: center;
  font-size: ${theme.typography.small};
  color: ${theme.colors.textSecondary};
`
export const StyledLink = styled.span`
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`