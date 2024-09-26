import { Component } from "react";
import { Footer, Header, LoginForm } from "../components";

class Login extends Component {
  render() {
    return (
      <>
        <Header />
        <LoginForm className="mx-auto" />
        { <Footer /> }
      </>
    );
  }
}

export default Login;
