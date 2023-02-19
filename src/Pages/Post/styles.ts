import styled from 'styled-components'

export const PostContainer = styled.div`
  width: 90%;
  max-width: 54rem;
  margin: 0 auto;
`

export const PostContent = styled.div`
  padding: 2.5rem 2rem;
  white-space: pre-wrap;

  p > img {
    width: 100%;
    object-fit: cover;
  }

  a {
    text-decoration: none;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    color: ${(props) => props.theme.blue};

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`
