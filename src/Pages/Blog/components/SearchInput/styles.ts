import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const SearchForm = styled.form`
  input[type='text'] {
    width: 100%;
    background: ${(props) => props.theme['base-input']};
    border: 1px solid ${(props) => props.theme['base-border']};
    border-radius: 6px;
    padding: 0.75rem 1rem;

    color: ${(props) => props.theme['base-text']};

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const SearchInputHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h3 {
    font-size: 1.125rem;
    font-weight: bold;

    color: ${(props) => props.theme['base-subtitle']};
  }

  > span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`
