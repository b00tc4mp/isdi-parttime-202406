import { Footer, Header } from "../components";
import { withPermissions } from "../hocs";
import useUserData from "../hooks/useUserData";

function Home() {
  const [user, setUser] = useUserData();

  return (
    <>
      <Header />
      Soy Home
      <br />
      {user.id}
      <br />
      {user.username}
      <br />
      {user.dateOfBirth}
      <br />
      {user.email}
      {/* <Footer /> */}
    </>
  );
}

export default withPermissions(Home);
