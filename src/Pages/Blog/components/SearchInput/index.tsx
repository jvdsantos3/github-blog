import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchForm, SearchInputContainer, SearchInputHeader } from './styles'
import { useContextSelector } from 'use-context-selector'
import { IssuesContext } from '../../../../contexts/IssuesContext'
import { useEffect } from 'react'
import { GithubDataContext } from '../../../../contexts/GithubDataContext'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchInputs = z.infer<typeof searchInputSchema>

export function SearchInput() {
  const totalCount = useContextSelector(GithubDataContext, (context) => {
    return context.totalCount
  })

  const fetchIssues = useContextSelector(GithubDataContext, (context) => {
    return context.fetchIssuesSearch
  })

  const { register, handleSubmit, reset } = useForm<SearchInputs>({
    resolver: zodResolver(searchInputSchema),
  })

  function handleSearchIssues(data: SearchInputs) {
    fetchIssues(data.query)

    reset()
  }

  return (
    <SearchInputContainer>
      <SearchInputHeader>
        <h3>Publicações</h3>
        <span>{totalCount} publicações</span>
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
