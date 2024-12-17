import { AboutUs, Faq, Home, Rates, Services } from "./pages/commonPages";
import { EnterPages, ProfilePages } from "./pages";
import logic from "./logic";
import ModalContext from "./context/ModalContext";
import {
  Route,
  Routes,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

function App() {
  const [tokenUpdated, setTokenUpdated] = useState(Date.now());

  useEffect(() => {}, [tokenUpdated]);

  return (
    <ModalContext.Provider>
      {/** HEADER + rutas de todos los links */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/services" element={<Services />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/*"
          element={
            logic.isUserLoggedIn() ? (
              <ProfilePages
                onUserLoggedOut={() => setTokenUpdated(Date.now())}
              />
            ) : (
              <EnterPages onUserLoggedIn={() => setTokenUpdated(Date.now())} />
            )
          }
        />
      </Routes>
    </ModalContext.Provider>
  );
}

export default App;
