import { Outlet, Route, Routes } from 'react-router'
import { Dashboard } from './authenticatedPages'

function Authenticated({ onUserLoggedOut }) {
    return <>
        <Routes>
            <Route path='/dashboard' element={<Dashboard onUserLoggedOut={onUserLoggedOut} />} />
            {/*Solamente deberia pasar el onuserloggedout a las pags/comp donde esta el boton de log out*/}
        </Routes>
    <Outlet />
    </>
}

export default Authenticated