import { Link } from "react-router-dom"

function Landing() {
    return (
        <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid">
            <div className="place-self-center w-fit max-sm:px-6 relative max-sm:-top-14">
                <div className="w-fit mx-auto mb-9">
                    <h1 className="text-3xl">Bienvenido a mi Weather App</h1>
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 sm:gap-8 max-sm:flex max-sm:flex-col">
                <Link
                to="/signup"
                target="_self"
                rel="next"
                className="btn btn-secondary btn-md"
                >
                    Go to Sign Up Form
                </Link>
                <Link
                to="/login"
                target="_self"
                rel="next"
                className="btn btn-secondary btn-md"
                >
                    Go to Log In Form
                </Link>
            </div>
        </section>
    )
}

export default Landing