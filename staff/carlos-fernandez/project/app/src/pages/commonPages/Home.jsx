import NoAccountMessage from "../../components/cards/NoAccountMessage";

function Home() {
  const isLoggedIn = !!sessionStorage.getItem("token");

  return (
    <>
      <div className="text-xl text-black"></div>

      {!isLoggedIn ? <NoAccountMessage /> : null}
    </>
  );
}

export default Home;
