import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface Issue {
  id: number
  number: number
  assignee: {
    html_url: string
    login: string
  }
  title: string
  created_at: string
  body: string
  comments: number
}

interface IssuesContextType {
  issues: Issue[]
  issuesCount: number
  fetchIssues: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const issuesCount = issues.length

  const fetchIssues = useCallback(async (query?: string) => {
    const response = await api.get('search/issues', {
      params: {
        q: query
          ? `repo:jvdsantos3/github-blog is:issue ${query}`
          : 'repo:jvdsantos3/github-blog is:issue',
      },
    })

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues, issuesCount }}>
      {children}
    </IssuesContext.Provider>
  )
}
