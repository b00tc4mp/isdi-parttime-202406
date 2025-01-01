import { Outlet, Route, Routes } from 'react-router'
import { Overview } from './authenticatedPages'

function Authenticated({ onUserLoggedIn }) {
    return <>
        <div className='container'>
            <Routes>
                <Route path='/overview' element={<Overview onUserLoggedIn={onUserLoggedIn} />} />
            </Routes>
        </div>
        <Outlet />
    </>
}

export default Authenticated