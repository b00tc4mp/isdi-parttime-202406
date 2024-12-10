import './App.css'
import { Landing, LogIn, SignUp } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <main>
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/login' element={<LogIn />}/>
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
    </main>
  )
}

export default App


