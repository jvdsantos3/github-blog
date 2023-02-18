import { useContextSelector } from 'use-context-selector'
import { IssuesContext, IssuesProvider } from '../../contexts/IssuesContext'
import { UserProvider } from '../../contexts/UserContext'
import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { BlogCard, BlogCardHeader, BlogContainer, BlogContent } from './styles'

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
        {/* {issues.map((issue) => {
          return (
            <BlogCard key={issue.id}>
              <BlogCardHeader>
                <h3>{issue.title}</h3>
                <span>{issue.created_at}</span>
              </BlogCardHeader>

              <p>...</p>
            </BlogCard>
          )
        })} */}
      </BlogContent>
    </BlogContainer>
  )
}
