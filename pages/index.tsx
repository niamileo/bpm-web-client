import Aside from "../components/partials/aside";
import Kapak from "../components/partials/aside/kapak";
import Footer from "../components/partials/footer";
import IndexRest from "../components/partials/indexpage/rest";

export default function Home() {
  return (
    <div className="page">
      <Aside />
      <div className="content">
        <div className="container-fluid">
          {/* <!-- Page title --> */}
          <Kapak />
          <IndexRest />
        </div>
        <Footer />
      </div>
    </div>
  );
}
