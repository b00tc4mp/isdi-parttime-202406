import { Component } from "react";
import { Link } from "react-router-dom";
import ES from "../locales/es.json";
const {
  pages: {
    notFound: { title, subtitle, mainButton },
  },
} = ES;

class Page404 extends Component {
  render() {
    return (
      <div className="section-wrapper">
        <section className="w-full h-full">
          <div>
            <h1 className="text-[180px] mx-auto w-fit animate-fadeIn">
              {title}
            </h1>
            <p className="text-xl mx-auto w-fit animate-bounce">{subtitle}</p>
            <div className="pt-12 mx-auto w-fit">
              <Link
                to="/"
                target="_self"
                rel="next"
                className="btn btn-circle btn-lg btn-primary w-52 h-52 p-6 animate-wiggle"
              >
                <span className="leading-relaxed text-lg">{mainButton}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Page404;
