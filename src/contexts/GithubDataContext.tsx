import { ReactNode, useState, useEffect, useCallback } from 'react'
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

interface Issue {
  id: number
  number: number
  html_url: string
  user: {
    login: string
  }
  title: string
  created_at: string
  body: string
  comments: number
}

interface IssuesSearch {
  total_count: number
  items: Issue[]
}

interface GithubDataContextType {
  user: User
  items: Issue[]
  totalCount: number
  selectedIssue: Issue
  fetchIssuesSearch: (query?: string) => Promise<void>
  fetchSelectedIssue: (issueNumber: string) => Promise<void>
}

interface GithubDataProviderProps {
  children: ReactNode
}

export const GithubDataContext = createContext({} as GithubDataContextType)

export function GithubDataProvider({ children }: GithubDataProviderProps) {
  const [user, setUser] = useState({} as User)

  const [issuesSearch, setIssuesSearch] = useState({} as IssuesSearch)

  const [selectedIssue, setSelectedIssue] = useState({} as Issue)

  // User

  const fetchUser = useCallback(async (query?: string) => {
    const response = await api.get('users/jvdsantos3')

    setUser(response.data)
  }, [])

  // Search Issues

  async function fetchIssuesSearch(query?: string) {
    const response = await api.get(
      `/search/issues?q=${query} repo:jvdsantos3/github-blog is:issue`,
    )

    setIssuesSearch(response.data)
  }

  const { items } = issuesSearch
  const totalCount = issuesSearch.total_count

  // Selected Issue

  async function fetchSelectedIssue(issueNumber: string) {
    const response = await api.get(
      `/repos/jvdsantos3/github-blog/issues/${issueNumber}`,
    )

    setSelectedIssue(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  useEffect(() => {
    fetchIssuesSearch('')
  }, [])

  return (
    <GithubDataContext.Provider
      value={{
        user,
        items,
        totalCount,
        selectedIssue,
        fetchIssuesSearch,
        fetchSelectedIssue,
      }}
    >
      {children}
    </GithubDataContext.Provider>
  )
}
