import { Footer, Header } from "../components";
import { withPermissions } from "../hocs";

function Home({ noche }) {
  return (
    <>
      <Header />
      Soy home
      <Footer />
    </>
  );
}

export default withPermissions(Home);
