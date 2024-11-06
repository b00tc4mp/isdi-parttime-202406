import { Footer, Header } from "../components";
import { withPermissions } from "../hocs";
import useUserData from "../hooks/useUserData";

function Profile() {
  const [user, setUser] = useUserData();

  return (
    <>
      <Header />
      Soy Profile
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

export default withPermissions(Profile);