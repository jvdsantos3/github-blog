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
`
