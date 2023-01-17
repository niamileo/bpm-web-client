import Bell from "components/SVG/Bell.svg";

export default function Header() {
  return (
    <header className="navbar navbar-expand-md navbar-light d-print-none">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
          <a href=".">
            <img
              src="logo.svg"
              width="110"
              height="32"
              alt="Tabler"
              className="navbar-brand-image"
            />
          </a>
        </h1>
        <div className="navbar-nav flex-row order-md-last">
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <a
              href="#"
              className="nav-link px-0"
              data-bs-toggle="dropdown"
              tabIndex={-1}
              aria-label="Show notifications"
            >
              <Bell />
              <span className="badge bg-red"></span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-card">
              <div className="card">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus ad amet consectetur exercitationem fugiat in ipsa
                  ipsum, natus odio quidem quod repudiandae sapiente. Amet
                  debitis et magni maxime necessitatibus ullam.
                </div>
              </div>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a
              href="#"
              className="nav-link d-flex lh-1 text-reset p-0"
              data-bs-toggle="dropdown"
              aria-label="Open user menu"
            >
              <span
                className="avatar avatar-sm"
                style={{ backgroundImage: "url(./static/avatars/000m.jpg)" }}
              />
              <div className="d-none d-xl-block ps-2">
                <div>Paweł Kuna</div>
                <div className="mt-1 small text-muted">UI Designer</div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
              <a href="#" className="dropdown-item">
                Set status
              </a>
              <a href="#" className="dropdown-item">
                Profile &amp; account
              </a>
              <a href="#" className="dropdown-item">
                Feedback
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                Settings
              </a>
              <a href="#" className="dropdown-item">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
