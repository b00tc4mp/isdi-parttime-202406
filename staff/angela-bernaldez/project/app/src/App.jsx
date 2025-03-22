import Public from './pages/Public.jsx'
import Authenticated from './pages/Authenticated.jsx'
import logic from './logic'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'
import Context from './context'

function App() {

  const [tokenUpdated, setTokenUpdated] = useState(Date.now())

  useEffect(() => { }, [tokenUpdated])

  return (
    <Context.ModalProvider>
      <main>
      <MyComponent />
        <Routes>
          <Route path='/*' element={logic.isUserLoggedIn() ? <Authenticated onUserLoggedOut={() => setTokenUpdated(Date.now())} /> : <Public onUserLoggedIn={() => setTokenUpdated(Date.now())} />} />
        </Routes>
      </main>
    </Context.ModalProvider>
  )
}

export default App



