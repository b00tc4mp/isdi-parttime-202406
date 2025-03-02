import NoAccountMessage from "../../components/cards/NoAccountMessage";
import BookingCalendar from "../../components/BookingCalendar";

function Home() {
  const isLoggedIn = !!sessionStorage.getItem("token");

  return (
    <>
      <div className="text-xl text-black"></div>

      {!isLoggedIn ? <NoAccountMessage /> : null}
      {isLoggedIn ? <BookingCalendar /> : null}
    </>
  );
}

export default Home;
