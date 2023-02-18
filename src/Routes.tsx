import { Routes, Route } from 'react-router-dom'
import { IssuesProvider } from './contexts/IssuesContext'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Blog } from './Pages/Blog'
import { Post } from './Pages/Post'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route
          path="/"
          element={
            <IssuesProvider>
              <Blog />
            </IssuesProvider>
          }
        />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
