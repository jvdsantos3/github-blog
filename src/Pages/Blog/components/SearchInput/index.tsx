import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchInputContainer, SearchInputHeader } from './styles'

const searchInputSchema = z.object({
  query: z.string(),
})

type SearchInputs = z.infer<typeof searchInputSchema>

export function SearchInput() {
  const { register } = useForm<SearchInputs>({
    resolver: zodResolver(searchInputSchema),
  })

  return (
    <SearchInputContainer>
      <SearchInputHeader>
        <h3>Publicações</h3>
        <span>6 publicações</span>
      </SearchInputHeader>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        required
        {...register('query')}
      />
    </SearchInputContainer>
  )
}
