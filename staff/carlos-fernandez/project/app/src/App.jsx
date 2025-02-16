import { AboutUs, Faq, Home, Rates, Services } from "./pages/commonPages";
import { Header, HeaderMobile } from "./components";
import { EnterPages, ProfilePages } from "./pages";
import logic from "./logic";
import ModalContext from "./context/ModalContext";
import { Route, Routes } from "react-router";
import { useEffect, useState } from "react";

function App() {
  const [tokenUpdated, setTokenUpdated] = useState(Date.now());
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {}, [tokenUpdated]);

  return (
    <ModalContext.Provider>
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="hidden lg:block">
          <Header onUserLoggedOut={() => setTokenUpdated(Date.now())} />
        </div>
        <div className="block lg:hidden">
          <HeaderMobile onUserLoggedOut={() => setTokenUpdated(Date.now())} />
        </div>
      </div>
      <div className="pt-[91.01px] lg:pt-[122px]">
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
                <ProfilePages />
              ) : (
                <EnterPages
                  onUserLoggedIn={() => setTokenUpdated(Date.now())}
                />
              )
            }
          />
        </Routes>
      </div>
    </ModalContext.Provider>
  );
}

export default App;
