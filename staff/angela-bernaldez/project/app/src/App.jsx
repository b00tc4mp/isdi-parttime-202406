import Public from './pages/Public.jsx'
import Authenticated from './pages/Authenticated.jsx'
import logic from './logic'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router'

function App() {

  const [tokenUpdated, setTokenUpdated] = useState(Date.now())

  useEffect(() => { }, [tokenUpdated])

  return (
      <main>
        <Routes>
          <Route path='/*' element={logic.isUserLoggedIn() ? <Authenticated onUserLoggedOut={() => setTokenUpdated(Date.now())} /> : <Public onUserLoggedIn={() => setTokenUpdated(Date.now())} />} />
        </Routes>
      </main>
  )
}

export default App

// si voy a usar daisy para los themes, buscar uno que me guste 
// coger los componentes ya hechos y modificarlos un poco y ya quedan muy bien

// si elijo algun tem daisy, coger uno que tenga tonos no muy estridenteds (tonos azulitos me iria bien)
// si figma parece complicado usar canvas

// intentar jugar con figma para tener un diseño sobre el que construir el front 

