import { Component } from "react";
import { Footer, Header } from "../components";

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <h2 className="text-4xl">All the database stuff</h2>
        
        <ul className="bg-neutral">
          <li>Bienvenido @"Your Name"</li>
          <li>"Main photo"</li>
          <li>"Main description"</li>
          <li>"Last Update"</li>
          <li>"Update Status"</li>
          <li>"All nav buttons"</li>
          <li>"Delete Account"</li>            
                
        </ul>
        <Footer />
      </>
    );
  }
}

export default Home;
