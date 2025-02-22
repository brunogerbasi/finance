import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import useUserStore from '../../../store/userStore'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useUserStore((state) => state.user)

  if (!user) {
    return <Navigate to="/" replace />
  }

  return <>{children}</>
}

export default ProtectedRoute
