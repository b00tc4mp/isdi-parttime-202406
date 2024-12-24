import { Outlet, Route, Routes } from "react-router";
import { MyPets, MyProfile, MyReservations } from "./privatePages";
import NotFound from "./NotFound";

function ProfilePages() {
  return (
    <div>
      <Routes>
        <Route path="/my-pets" element={<MyPets />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-reservations" element={<MyReservations />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default ProfilePages;
