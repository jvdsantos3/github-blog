import { formatDistanceToNowStrict, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function dateFormatter(dateString: string) {
  const date = formatDistanceToNowStrict(parseISO(dateString), {
    addSuffix: true,
    locale: ptBR,
  })

  return date
}

export function textLenghtFormatter(text: string) {
  return `${text.substring(0, 150)}...`
}
