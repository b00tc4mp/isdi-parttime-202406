import { Component } from "react"
import { Header, Footer, LogInForm } from "../components"

class LogIn extends Component {
    render() {
        return (
            <>
                <Header />
                <LogInForm />
                <Footer />
            </>
        )
    }
}

export default LogIn