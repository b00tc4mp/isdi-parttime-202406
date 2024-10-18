import { Component } from "react";
import { Footer, Header, SignupForm } from "../components";

class SignUp extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="w-screen h-[calc(100vh-var(--header-heigth))] xs:pt-20 max-xs:pt-16 overflow-y-auto">
          <SignupForm
            className="mx-auto"
            onSubmit={(event) => {
              console.log(event);
            }}
          />
        </section>
        {/* <Footer /> */}
      </>
    );
  }
}

export default SignUp;
