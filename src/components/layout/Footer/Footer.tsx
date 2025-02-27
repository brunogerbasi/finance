import { ContentFooter, FooterTxt } from "./Footer.styles"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <ContentFooter>
      <FooterTxt>   
        Bruno Gerbasi - Finance © {currentYear}. Todos os direitos reservados.       
      </FooterTxt>
    </ContentFooter>
  )
}

export default Footer