import { Outlet, Route, Routes } from "react-router";
import { Login, SignUp, UserAccess } from "./accessPages";
import NotFound from "./NotFound";

function EnterPages() {
  return (
    <div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="user-access" element={<UserAccess />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default EnterPages;
