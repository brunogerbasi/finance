import { LoadingContainer } from "./Loading.styles"
import spinner from '../../../assets/images/spinner.gif'

const Loading = () => {
  return (
    <LoadingContainer>
      <img src={spinner} alt="Carregando..." />
    </LoadingContainer>
  )
}

export default Loading