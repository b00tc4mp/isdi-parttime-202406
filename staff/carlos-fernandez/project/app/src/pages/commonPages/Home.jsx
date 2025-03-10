import {
  NoAccountMessage,
  BookingCalendar,
  BookingSuccess,
} from "../../components/";
import { useHeaderHeight } from "../../hooks/useHeaderHeight";
import { useState } from "react";
import createBooking from "../../logic/createBooking";
import { useModalError } from "../../context/ModalContext";

function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  const isLoggedIn = !!sessionStorage.getItem("token");
  const headerHeight = useHeaderHeight();

  const openModalError = useModalError();

  const onSubmit = (bookingData) => {
    try {
      if (!createBooking || typeof createBooking !== "function") {
        openModalError(new Error("createBooking is not a function"));
      }

      return createBooking(bookingData).then(() => {
        setIsSuccess(true);
      });
    } catch (error) {
      openModalError(error);
    }
  };

  return (
    <>
      <section
        style={{ height: `calc(100vh - ${headerHeight}px)` }}
        className="w-screen flex items-center justify-center sm:py-10"
      >
        {!isLoggedIn ? <NoAccountMessage /> : null}
        {isLoggedIn ? (
          <>
            {isSuccess && (
              <BookingSuccess onClose={() => setIsSuccess(false)} />
            )}
            <BookingCalendar className="mx-auto" onSubmit={onSubmit} />
          </>
        ) : null}
      </section>
    </>
  );
}

export default Home;
