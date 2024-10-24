import { Component } from "react";
import { Footer, Header, SignupForm } from "../components";

class SignUp extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="w-screen h-full min-h-[calc(100vh-var(--header-heigth))] sm:py-20">
          <SignupForm
            className="mx-auto max-sm:min-h-[calc(100vh-var(--header-heigth))]"
            onSubmit={() => {}}
          />
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

export default SignUp;
