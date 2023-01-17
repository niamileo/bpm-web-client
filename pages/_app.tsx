import type { AppProps } from "next/app";
// ** Partials
import Footer from "../components/partials/Footer";
import Header from "components/partials/Header";
import TopNav from "components/partials/TopNav";
// ** Styles
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/tabler.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="page">
      <Header />
      <TopNav />
      <div className="content">
        <div className="container-fluid">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  );
}
