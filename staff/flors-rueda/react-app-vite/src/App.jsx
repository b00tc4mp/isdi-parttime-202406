import { Outlet, Route, Routes } from 'react-router'
import { Session, SignIn } from './pages'
import logic from './logic'
import { useEffect, useState } from 'react'

function App() {
  const [tokenUpdated, setTokenUpdated] = useState(Date.now());

  useEffect(() => { }, [tokenUpdated])

  return (
    <div>
      <Routes>
        <Route path='/*' element={logic.isUserLoggedIn() ? <Session onUserLoggedOut={() => setTokenUpdated(Date.now())} /> : <SignIn onUserLoggedIn={() => setTokenUpdated(Date.now())} />} />
      </Routes>
    </div>
  )
}

export default App
