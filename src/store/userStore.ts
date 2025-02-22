
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  name: string
  email: string
  password: string
}

interface UserStore {
  user: User | null
  setUser: (user: User) => void
  clearUser: () => void
}

const useUserStore = create<UserStore, [['zustand/persist', UserStore]]>(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set({ user }),
      clearUser: () => set({ user: null })
    }),
    {
      name: 'user-storage' 
    }
  )
)

export default useUserStore
