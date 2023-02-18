import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchForm, SearchInputContainer, SearchInputHeader } from './styles'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useEffect } from 'react'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchInputs = z.infer<typeof searchInputSchema>

export function SearchInput() {
  const issuesCount = useContextSelector(IssuesContext, (context) => {
    return context.issuesCount
  })

  const fetchIssues = useContextSelector(IssuesContext, (context) => {
    return context.fetchIssues
  })

  const { register, handleSubmit } = useForm<SearchInputs>({
    resolver: zodResolver(searchInputSchema),
  })

  function handleSearchIssues(data: SearchInputs) {
    fetchIssues(data.query)
  }

  return (
    <SearchInputContainer>
      <SearchInputHeader>
        <h3>Publicações</h3>
        <span>{issuesCount} publicações</span>
      </SearchInputHeader>

      <SearchForm onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
        <input type="submit" hidden />
      </SearchForm>
    </SearchInputContainer>
  )
}
