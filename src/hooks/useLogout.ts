import { useEffect, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import useUserStore from '../store/userStore'

const useLogout = (timeoutInMs = 1 * 60 * 1000) => {
  const logout = useUserStore((state) => state.logout)
  const navigate = useNavigate()
  const timerIdRef = useRef<number | null>(null)

  const updateLastActivity = useCallback(() => {
    sessionStorage.setItem('lastActivity', Date.now().toString())
  }, [])

  const handleLogout = useCallback(() => {
    logout()
    navigate('/', { replace: true })
  }, [logout, navigate])

  const resetTimer = useCallback(() => {
    updateLastActivity()

    if (timerIdRef.current) {
      clearTimeout(timerIdRef.current)
    }

    timerIdRef.current = window.setTimeout(() => {
      const lastActivity = parseInt(sessionStorage.getItem('lastActivity') || '0', 10)
      if (Date.now() - lastActivity >= timeoutInMs) {
        handleLogout()
      } else {
        resetTimer()
      }
    }, timeoutInMs)
  }, [timeoutInMs, updateLastActivity, handleLogout])

  useEffect(() => {
    updateLastActivity()
    resetTimer()

    const events = ['mousemove', 'mousedown', 'keypress', 'touchstart', 'scroll']
    events.forEach((event) => {
      window.addEventListener(event, resetTimer)
    })

    return () => {
      if (timerIdRef.current) {
        clearTimeout(timerIdRef.current)
      }
      events.forEach((event) => {
        window.removeEventListener(event, resetTimer)
      })
    }
  }, [resetTimer, updateLastActivity])

  return null
}

export default useLogout
