import { Outlet, Route, Routes } from 'react-router'
import { Register, Login } from './signInPages'
import { NotFound } from './index'


//Logged Out Pages
function SignIn({ onUserLoggedIn }) {
    return <>
        <div className='container'>
            <Routes>
                <Route path='/' element={<Login onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/login' element={<Login onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/register' element={<Register onUserLoggedIn={onUserLoggedIn} />} />
                <Route path='/*' element={<NotFound />} />
            </Routes>
        </div>

        <Outlet /> {/* Sirve para renderizar las rutas anidadas */}
    </>
}

export default SignIn