import { ReactNode, createContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
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

interface AnIssueContextType {
  issue: Issue
  showIssue: (issueNumber: string) => Promise<void>
}

interface AnIssueProviderProps {
  children: ReactNode
}

export const AnIssueContext = createContext({} as AnIssueContextType)

export function AnIssueProvider({ children }: AnIssueProviderProps) {
  const { issueNumber } = useParams()

  const [issue, setIssue] = useState({} as Issue)

  async function showIssue(issueNumber: string) {
    const response = await api.get(
      `repos/jvdsantos3/github-blog/issues/${issueNumber}`,
    )

    setIssue(response.data)
  }

  useEffect(() => {
    issueNumber && showIssue(issueNumber)
  }, [issueNumber])

  return (
    <AnIssueContext.Provider value={{ showIssue, issue }}>
      {children}
    </AnIssueContext.Provider>
  )
}
