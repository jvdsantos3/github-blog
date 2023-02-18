import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { dateFormatter } from '../../../../utils/formatter'
import { useContext } from 'react'
import { AnIssueContext } from '../../../../contexts/AnIssueContext'

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

export function PostInfo() {
  const { issue } = useContext(AnIssueContext)

  return (
    <PostInfoContainer>
      <PostInfoHeader>
        <NavLink to="/">
          <FaChevronLeft />
          <span>Voltar</span>
        </NavLink>
        <NavLink to={issue && issue.assignee.html_url}>
          <span>Ver no GitHub</span>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </NavLink>
      </PostInfoHeader>

      <PostInfoContent>
        <h2>{issue.title}</h2>

        <PostInfoAssets>
          <span>
            <FaGithub />
            <p>{issue && issue.assignee.login}</p>
          </span>
          <span>
            <FaCalendarDay />
            <p>{issue && dateFormatter(issue.created_at)}</p>
          </span>
          <span>
            <FaComment />
            <p>{issue && issue.comments} comentários</p>
          </span>
        </PostInfoAssets>
      </PostInfoContent>
    </PostInfoContainer>
  )
}
