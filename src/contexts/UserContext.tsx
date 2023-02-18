import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface User {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  followers: number
}

interface UserContextType {
  user: User
  fetchUser: () => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState({} as User)

  const fetchUser = useCallback(async () => {
    const response = await api.get('users/jvdsantos3')

    setUser(response.data)
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  )
}
