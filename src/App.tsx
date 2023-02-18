import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GithubDataProvider } from './contexts/GithubDataContext'
import { IssuesProvider } from './contexts/IssuesContext'
import { UserProvider } from './contexts/UserContext'
import { Router } from './Routes'
import { GlobalStyle } from './styles/GlobalStyle'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <GithubDataProvider>
          <Router />
        </GithubDataProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
