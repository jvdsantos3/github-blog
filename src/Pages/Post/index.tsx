import { useContext, useEffect } from 'react'
import { PostInfo } from './components/PostInfo'
import ReactMarkdown from 'react-markdown'

import { PostContainer, PostContent } from './styles'
import { AnIssueContext } from '../../contexts/AnIssueContext'

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

export function Post() {
  const { issue } = useContext(AnIssueContext)

  return (
    <PostContainer>
      <PostInfo />

      <PostContent>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
