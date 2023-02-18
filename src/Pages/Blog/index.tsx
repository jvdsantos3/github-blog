import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../contexts/IssuesContext'
import { UserProvider } from '../../contexts/UserContext'
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
  const issues = useContextSelector(IssuesContext, (context) => {
    return context.issues
  })

  return (
    <BlogContainer>
      <UserProvider>
        <Profile />
      </UserProvider>

      <SearchInput />

      <BlogContent>
        {issues.map((issue) => {
          return (
            <BlogCard key={issue.id}>
              <BlogCardHeader>
                <h3>{issue.title}</h3>
                <span>{dateFormatter(issue.created_at)}</span>
              </BlogCardHeader>

              <p>{textLenghtFormatter(issue.body)}</p>
            </BlogCard>
          )
        })}
      </BlogContent>

      {issues.length < 1 && <IssuesEmpty>Sem registros...</IssuesEmpty>}
    </BlogContainer>
  )
}
