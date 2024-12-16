import { Landing, SignUp, Login } from "./pages";
import ModalContext from "./context/ModalContext";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  return (
    <ModalContext.Provider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
