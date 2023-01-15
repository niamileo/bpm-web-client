import { Col } from "reactstrap";

export default function Third() {
  return (
    <Col sm={6} lg={3}>
      <div className="card">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div className="subheader">New clients</div>
            <div className="ms-auto lh-1">
              <div className="dropdown">
                <a
                  className="dropdown-toggle text-muted"
                  href="#"
                  style={{ width: "9%" }}
                  ta-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Last 7 days
                </a>
                <div className="dropdown-menu dropdown-menu-end">
                  <a className="dropdown-item active" href="#">
                    Last 7 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 30 days
                  </a>
                  <a className="dropdown-item" href="#">
                    Last 3 months
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-baseline">
            <div className="h1 mb-3 me-2">6,782</div>
            <div className="me-auto">
              <span className="text-yellow d-inline-flex align-items-center lh-1">
                0%{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon ms-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>
          </div>
          <div id="chart-new-clients" className="chart-sm"></div>
        </div>
      </div>
    </Col>
  );
}
