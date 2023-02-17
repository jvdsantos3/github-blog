import { Profile } from './components/Profile'
import { SearchInput } from './components/SearchInput'
import { BlogCard, BlogCardHeader, BlogContainer, BlogContent } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />

      <SearchInput />

      <BlogContent>
        <BlogCard>
          <BlogCardHeader>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </BlogCardHeader>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </BlogCardHeader>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </BlogCard>

        <BlogCard>
          <BlogCardHeader>
            <h3>JavaScript data types and data structures</h3>
            <span>Há 1 dia</span>
          </BlogCardHeader>

          <p>
            Programming languages all have built-in data structures, but these
            often differ from one language to another. This article attempts to
            list the built-in data structures available in
          </p>
        </BlogCard>
      </BlogContent>
    </BlogContainer>
  )
}
