import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.6);

  padding: 2rem 2rem 2rem 2.5rem;
  margin: -5.5rem 0 4.5rem;

  border-radius: 10px;
`

export const ProfileContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;

  > img {
    width: 9.25rem;
    height: 9.25rem;

    border-radius: 8px;
  }
`

export const ProfileContentInfo = styled.div`
  padding-top: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProfileTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  > h1 {
    font-size: 1.5rem;
    font-weight: bold;

    color: ${(props) => props.theme['base-title']};
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    text-decoration: none;

    font-size: 0.75rem;
    font-weight: bold;

    color: ${(props) => props.theme.blue};

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const ProfileContentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const FooterItems = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > svg {
    color: ${(props) => props.theme['base-label']};
  }

  > span {
    color: ${(props) => props.theme['base-subtitle']};
  }
`
