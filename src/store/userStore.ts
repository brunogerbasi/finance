import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  name: string
  email: string
  password: string
}

interface UserStore {
  user: User | null
  isLoggedIn: boolean
  setUser: (user: User) => void
  login: () => void
  logout: () => void
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,
      isLoggedIn: false,
      setUser: (user: User) => set({ user }), 
      login: () => set({ isLoggedIn: true }),
      logout: () => set({ isLoggedIn: false }),
    }),
    {
      name: 'user-storage', 
      partialize: (state) => ({ user: state.user }),
    }
  )
)

export default useUserStore
