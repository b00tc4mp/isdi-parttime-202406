import { Component } from "react";
import { Link } from "react-router-dom";

class Page404 extends Component {
  render() {
    return (
      <section className="w-full h-full min-w-[100vw] min-h-[100vh] grid glass">
        <div className="py-12 max-sm:px-6 max-sm:place-self-center max-sm:-top-14">
          <h1 className="sm:text-[240px] max-sm:text-[180px] max-xs:text-[80px] mx-auto w-fit animate-buzzing">
            404
          </h1>
          <p className="mx-auto w-fit animate-bounce max-sm:text-lg sm:text-xl max-xs:text-base text-center">
            Parece que alguien anda algo perdido...
          </p>
          <div className="pt-12 mx-auto w-fit">
            <Link
              to="/"
              target="_self"
              rel="next"
              className="btn btn-circle xs:btn-lg max-xs:btn-md btn-primary xs:w-52 xs:h-52 xs:p-6 max-xs:w-36 max-xs:h-36 max-xs:p-4 animate-wiggle"
            >
              <span className="leading-relaxed sm:text-lg">
                Volver a la página principal
              </span>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Page404;
