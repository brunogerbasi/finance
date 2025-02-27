import { ContentHeader, HeaderLogo, LogoutIcon, User } from "./Header.styles"
import Logo from '../../../assets/images/logo.svg'
import useLogout from "../../../hooks/useLogout"
import useUserStore from '../../../store/userStore'
import { useNavigate } from "react-router-dom"

const Header = () => {
  useLogout(2 * 60 * 1000)
  const user = useUserStore((state) => state.user)
  const firstName = user?.name.split(' ')[0] || ''

  const logout = useUserStore((state) => state.logout)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <ContentHeader>
      <HeaderLogo src={Logo}/>
      <User>
        <h4>{firstName}</h4>
        <LogoutIcon onClick={handleLogout}/>        
      </User>
    </ContentHeader>
  )
}

export default Header