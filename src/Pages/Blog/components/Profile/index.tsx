import {
  faBuilding,
  faUserGroup,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'

import { FaGithub } from 'react-icons/fa'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  FooterItems,
  ProfileContainer,
  ProfileContent,
  ProfileContentFooter,
  ProfileContentInfo,
  ProfileHeader,
  ProfileTexts,
} from './style'
import { useContextSelector } from 'use-context-selector'
import { UserContext } from '../../../../contexts/UserContext'

export function Profile() {
  const user = useContextSelector(UserContext, (context) => {
    return context.user
  })

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={user.avatar_url} alt="" />

        <ProfileContentInfo>
          <ProfileTexts>
            <ProfileHeader>
              <h1>{user.name}</h1>

              <a href={user.html_url}>
                GITHUB
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </ProfileHeader>

            <p>{user.bio}</p>
          </ProfileTexts>

          <ProfileContentFooter>
            <FooterItems>
              <FaGithub size={18} />
              <span>{user.login}</span>
            </FooterItems>
            <FooterItems>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{user.followers} seguidores</span>
            </FooterItems>
          </ProfileContentFooter>
        </ProfileContentInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
