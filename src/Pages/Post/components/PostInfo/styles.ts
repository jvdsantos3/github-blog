import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -5.25rem;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const PostInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`

export const PostInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1.5rem;
    font-weight: bold;

    color: ${(props) => props.theme['base-title']};
  }
`

export const PostInfoAssets = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: ${(props) => props.theme['base-label']};
    }

    p {
      color: ${(props) => props.theme['base-span']};
    }
  }
`
