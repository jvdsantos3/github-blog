import { useContextSelector } from 'use-context-selector'
import { GithubDataContext } from '../../contexts/GithubDataContext'
import { dateFormatter, textLenghtFormatter } from '../../utils/formatter'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import {
  BlogCard,
  BlogCardHeader,
  BlogContainer,
  BlogContent,
  IssuesEmpty,
} from './styles'

export function Blog() {
  const issues = useContextSelector(GithubDataContext, (context) => {
    return context.items
  })

  const totalCount = useContextSelector(GithubDataContext, (context) => {
    return context.totalCount
  })

  return (
    <BlogContainer>
      <Profile />

      <SearchInput />

      <BlogContent>
        {issues &&
          issues.map((issue) => {
            return (
              <BlogCard key={issue.number} to={`/post/${issue.number}`}>
                <BlogCardHeader>
                  <h3>{issue.title}</h3>
                  <span>{dateFormatter(issue.created_at)}</span>
                </BlogCardHeader>

                <p>{textLenghtFormatter(issue.body)}</p>
              </BlogCard>
            )
          })}
      </BlogContent>

      {totalCount < 1 && <IssuesEmpty>Sem registros...</IssuesEmpty>}
    </BlogContainer>
  )
}
