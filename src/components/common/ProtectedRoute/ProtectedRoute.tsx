import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import useUserStore from '../../../store/userStore'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
