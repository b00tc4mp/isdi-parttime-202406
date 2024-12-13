import { Landing, LogIn, SignUp } from './pages'
import { Route, Routes } from 'react-router-dom'
import { ModalContext } from './context'

// import.meta.env. when using env variables
// env variables need to start with VITE_

function App() {

  return (
    <ModalContext.Provider>
      <main>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/login' element={<LogIn />}/>
          <Route path='/signup' element={<SignUp />}/>
        </Routes>
      </main>
    </ModalContext.Provider>
  )
}

export default App


