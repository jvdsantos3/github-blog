import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { GithubDataContext } from '../../../../contexts/GithubDataContext'

import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa'

import {
  PostInfoAssets,
  PostInfoContainer,
  PostInfoContent,
  PostInfoHeader,
} from './styles'
import { dateFormatter } from '../../../../utils/formatter'

export function PostInfo() {
  const selectedIssue = useContextSelector(GithubDataContext, (context) => {
    return context.selectedIssue
  })

  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <NavLink to="/">
          <FaChevronLeft />
          <span>Voltar</span>
        </NavLink>
        <NavLink to={selectedIssue.html_url}>
          <span>Ver no GitHub</span>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </NavLink>
      </PostInfoHeader>

      <PostInfoContent>
        <h2>{selectedIssue.title}</h2>

        <PostInfoAssets>
          <span>
            <FaGithub />
            <p>{selectedIssue.user && selectedIssue.user.login}</p>
          </span>
          <span>
            <FaCalendarDay />
            <p>
              {selectedIssue.created_at &&
                dateFormatter(selectedIssue.created_at)}
            </p>
          </span>
          <span>
            <FaComment />
            <p>{selectedIssue.comments} comentários</p>
          </span>
        </PostInfoAssets>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
