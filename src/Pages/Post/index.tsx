import { PostInfo } from './components/PostInfo'
import ReactMarkdown from 'react-markdown'

import { PostContainer, PostContent } from './styles'
import { useContextSelector } from 'use-context-selector'
import { GithubDataContext } from '../../contexts/GithubDataContext'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export function Post() {
  const params = useParams()

  const fetchSelectedIssue = useContextSelector(
    GithubDataContext,
    (context) => {
      return context.fetchSelectedIssue
    },
  )

  const selectedIssue = useContextSelector(GithubDataContext, (context) => {
    return context.selectedIssue
  })

  useEffect(() => {
    if (
      !selectedIssue.body ||
      selectedIssue.number.toString() !== params.issueNumber
    ) {
      params.issueNumber && fetchSelectedIssue(params.issueNumber)
    }
  }, [fetchSelectedIssue, params.issueNumber, selectedIssue])

  return (
    <PostContainer>
      <PostInfo />

      <PostContent>
        <ReactMarkdown>{selectedIssue.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
