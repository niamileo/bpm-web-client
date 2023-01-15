import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/tabler.css";
import type { AppProps } from "next/app";

import Aside from "../components/partials/aside";
import Kapak from "../components/partials/aside/kapak";
import Footer from "../components/partials/footer";
import IndexRest from "../components/partials/indexpage/rest";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="page">
      <Aside />
      <div className="content">
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          {/* <Kapak /> */}
          <Component {...pageProps} />
          {/* <IndexRest /> */}
        </div>
        <Footer />
      </div>
    </div>
  );
}
