import { AboutUs, Faq, Home, Rates, Services } from "./pages/commonPages";
import { Header } from "./components";
import { EnterPages, ProfilePages } from "./pages";
import logic from "./logic";
import ModalContext from "./context/ModalContext";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [tokenUpdated, setTokenUpdated] = useState(Date.now());

  useEffect(() => {}, [tokenUpdated]);

  return (
    <ModalContext.Provider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
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
