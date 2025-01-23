import { Outlet, Route, Routes } from 'react-router'
import { Session, SignIn } from './pages'
import logic from './logic'
import { useEffect, useState } from 'react'
import Alert from './components/common/Alert';
import { Context } from './hooks/useCustomContext';

function App() {
  const [tokenUpdated, setTokenUpdated] = useState(Date.now());
  const [alertMessage, setAlertMessage] = useState(null);

  useEffect(() => { }, [tokenUpdated])

  //Si quiero desactivar el alert de manera automatica
  useEffect(() => {
    if (alertMessage) setTimeout(() => { setAlertMessage(null) }, 1000)
  }, [alertMessage])

  return (
    <Context.Provider value={{ alert: setAlertMessage }}>
      <Routes>
        <Route path='/*' element={logic.isUserLoggedIn() ? <Session onUserLoggedOut={() => setTokenUpdated(Date.now())} /> : <SignIn onUserLoggedIn={() => setTokenUpdated(Date.now())} />} />
      </Routes>
      {alertMessage && <Alert message={alertMessage} onAccept={() => setAlertMessage(null) /*Si quiero un botón para cerrar el alert*/} />}
    </Context.Provider>
  )
}

export default App
