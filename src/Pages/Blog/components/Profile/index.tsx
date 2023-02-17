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

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileContent>
        <img src="https://github.com/jvdsantos3.png" alt="" />

        <ProfileContentInfo>
          <ProfileTexts>
            <ProfileHeader>
              <h1>João Vitor</h1>

              <a href="https://github.com/jvdsantos3">
                GITHUB
                <FontAwesomeIcon icon={faUpRightFromSquare} />
              </a>
            </ProfileHeader>

            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
              viverra massa quam dignissim aenean malesuada suscipit. Nunc,
              volutpat pulvinar vel mass.
            </p>
          </ProfileTexts>

          <ProfileContentFooter>
            <FooterItems>
              <FaGithub size={18} />
              <span>jvdsantos3</span>
            </FooterItems>
            <FooterItems>
              <FontAwesomeIcon icon={faBuilding} />
              <span>ApiHub</span>
            </FooterItems>
            <FooterItems>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </FooterItems>
          </ProfileContentFooter>
        </ProfileContentInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
