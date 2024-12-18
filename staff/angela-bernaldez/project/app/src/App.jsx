import Public from './pages/Public.jsx'
import logic from './logic'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

function App() {

  const [tokenUpdated, setTokenUpdated] = useState(Date.now())

  useEffect(() => { }, [tokenUpdated])

  return (
      <main>
        <Routes>
          <Route path='/*' element={logic.isUserLoggedIn() ? <h1>add session component</h1> : <Public onUserLoggedIn={() => setTokenUpdated(Date.now())} />} />
        </Routes>
      </main>
  )
}

export default App


