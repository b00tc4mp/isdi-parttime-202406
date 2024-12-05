import { Outlet, Route, Routes } from 'react-router'
import { Home, MyProfile, Profile } from './sessionPages'
import { NotFound } from './index'
import NavbarUser from '../components/common/NavbarUser'

function Session({ onUserLoggedOut }) {
  return <div>
    <NavbarUser onUserLoggedOut={onUserLoggedOut} />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/home' element={<Home />} />
      <Route path='/my-profile' element={<MyProfile />} />
      <Route path='/profile/:username' element={<Profile />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <Outlet />
  </div>
}

export default Session