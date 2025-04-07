import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isUserLoggedIn } from "../logic/isUserLoggedIn";

export function useSearchParams() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tripType, setTripType] = useState("one-way");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const location = useLocation();

  useEffect(() => {
    setIsLoggedIn(isUserLoggedIn());

    if (location.state) {
      const {
        from,
        to,
        departureDate,
        returnDate,
        adults,
        children,
        cabinClass,
      } = location.state;

      setFrom(from);
      setTo(to);
      setDepartureDate(departureDate);
      setReturnDate(returnDate || "");
      setAdults(adults);
      setChildren(children);
      setCabinClass(cabinClass);
    }
  }, [location.state]);

  const searchParams = {
    from,
    to,
    departureDate,
    returnDate,
    adults,
    children,
    cabinClass,
    tripType,
  };

  return {
    isLoggedIn,
    tripType,
    setTripType,
    adults,
    setAdults,
    children,
    setChildren,
    cabinClass,
    setCabinClass,
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    searchParams,
  };
}
