import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const BlogContainer = styled.main`
  max-width: 54rem;
  margin: 0 auto;
`

export const BlogContent = styled.div`
  margin: 3rem 0 5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`
export const BlogCard = styled(NavLink)`
  text-decoration: none;

  background: ${(props) => props.theme['base-post']};
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  > p {
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['base-label']};
    cursor: pointer;
  }
`

export const BlogCardHeader = styled.div`
  display: flex;
  gap: 1rem;

  > h3 {
    flex: 1;

    font-size: 1.25rem;
    font-weight: bold;

    color: ${(props) => props.theme['base-title']};
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const IssuesEmpty = styled.span`
  display: block;
  text-align: center;

  font-weight: bold;
  color: ${(props) => props.theme['base-span']};
`
