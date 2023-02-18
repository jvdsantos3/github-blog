import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Issue {
  id: number
  title: string
  created_at: string
  body: string
}

interface IssuesContextType {
  issues: Issue[]
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: query
          ? `repo:jvdsantos3/github-blog is:issue ${query}`
          : 'repo:jvdsantos3/github-blog is:issue',
      },
    })

    console.log(fetchIssues)

    setIssues([response.data])
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  )
}
