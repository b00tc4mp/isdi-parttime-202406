import { Landing, SignUp } from "./pages";
import ModalContext from "./context/ModalContext";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
function App() {
  return (
    <ModalContext.Provider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
