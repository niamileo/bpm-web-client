import { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function Aside() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <aside className="navbar navbar-vertical navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h1 className="navbar-brand navbar-brand-autodark">
          <a href=".">
            <img
              src="logo-white.svg"
              width="110"
              height="32"
              alt="Tabler"
              className="navbar-brand-image"
            />
          </a>
        </h1>
        <div className="navbar-nav flex-row d-lg-none">
          <div className="nav-item dropdown d-none d-md-flex me-3">
            <a
              href="#"
              className="nav-link px-0"
              data-bs-toggle="dropdown"
              tabIndex={-1}
              aria-label="Show notifications"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon"
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
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
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
                style={{
                  backgroundImage: "url(./static/avatars/000m.jpg)",
                }}
              ></span>
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
                Profile & account
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
        <div className="collapse navbar-collapse" id="navbar-menu">
          <ul className="navbar-nav pt-lg-3">
            <li className="nav-item">
              <a className="nav-link" href="./index.html">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                    <polyline points="5 12 3 12 12 3 21 12 19 12" />
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                </span>
                <span className="nav-link-title">Home</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#navbar-base"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                    <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                    <line x1="12" y1="12" x2="20" y2="7.5" />
                    <line x1="12" y1="12" x2="12" y2="21" />
                    <line x1="12" y1="12" x2="4" y2="7.5" />
                    <line x1="16" y1="5.25" x2="8" y2="9.75" />
                  </svg>
                </span>
                <span className="nav-link-title">Interface</span>
              </a>
              <div className="dropdown-menu">
                <div className="dropdown-menu-columns">
                  <div className="dropdown-menu-column">
                    <a className="dropdown-item" href="./empty.html">
                      Empty page
                    </a>
                    <a className="dropdown-item" href="./accordion.html">
                      Accordion
                    </a>
                    <a className="dropdown-item" href="./blank.html">
                      Blank page
                    </a>
                    <a className="dropdown-item" href="./buttons.html">
                      Buttons
                    </a>
                    <a className="dropdown-item" href="./cards.html">
                      Cards
                    </a>
                    <a className="dropdown-item" href="./cards-masonry.html">
                      Cards Masonry
                    </a>
                    <a className="dropdown-item" href="./colors.html">
                      Colors
                    </a>
                    <a className="dropdown-item" href="./dropdowns.html">
                      Dropdowns
                    </a>
                    <a className="dropdown-item" href="./icons.html">
                      Icons
                    </a>
                    <a className="dropdown-item" href="./modals.html">
                      Modals
                    </a>
                    <a className="dropdown-item" href="./maps.html">
                      Maps
                    </a>
                    <a className="dropdown-item" href="./map-fullsize.html">
                      Map fullsize
                    </a>
                    <a className="dropdown-item" href="./maps-vector.html">
                      Vector maps
                    </a>
                    <a className="dropdown-item" href="./navigation.html">
                      Navigation
                    </a>
                  </div>
                  <div className="dropdown-menu-column">
                    <a className="dropdown-item" href="./charts.html">
                      Charts
                    </a>
                    <a className="dropdown-item" href="./charts-heatmap.html">
                      Charts heatmap
                    </a>
                    <a className="dropdown-item" href="./pagination.html">
                      Pagination
                    </a>
                    <a className="dropdown-item" href="./skeleton.html">
                      Skeleton
                    </a>
                    <a className="dropdown-item" href="./tabs.html">
                      Tabs
                    </a>
                    <a className="dropdown-item" href="./tables.html">
                      Tables
                    </a>
                    <a className="dropdown-item" href="./carousel.html">
                      Carousel
                    </a>
                    <a className="dropdown-item" href="./lists.html">
                      Lists
                    </a>
                    <a className="dropdown-item" href="./typography.html">
                      Typography
                    </a>
                    <a className="dropdown-item" href="./page-headers.html">
                      Page headers
                    </a>
                    <a className="dropdown-item" href="./markdown.html">
                      Markdown
                    </a>
                    <div className="dropend">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#sidebar-authentication"
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Authentication
                      </a>
                      <div className="dropdown-menu">
                        <a href="./sign-in.html" className="dropdown-item">
                          Sign in
                        </a>
                        <a href="./sign-up.html" className="dropdown-item">
                          Sign up
                        </a>
                        <a
                          href="./forgot-password.html"
                          className="dropdown-item"
                        >
                          Forgot password
                        </a>
                        <a
                          href="./terms-of-service.html"
                          className="dropdown-item"
                        >
                          Terms of service
                        </a>
                        <a href="./auth-lock.html" className="dropdown-item">
                          Lock screen
                        </a>
                      </div>
                    </div>
                    <div className="dropend">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="#sidebar-error"
                        data-bs-toggle="dropdown"
                        role="button"
                        aria-expanded="false"
                      >
                        Error pages
                      </a>
                      <div className="dropdown-menu">
                        <a href="./error-404.html" className="dropdown-item">
                          404 page
                        </a>
                        <a href="./error-500.html" className="dropdown-item">
                          500 page
                        </a>
                        <a
                          href="./error-maintenance.html"
                          className="dropdown-item"
                        >
                          Maintenance page
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./form-elements.html">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                    <polyline points="9 11 12 14 20 6" />
                    <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
                  </svg>
                </span>
                <span className="nav-link-title">Forms</span>
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#navbar-extra"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                    <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                  </svg>
                </span>
                <span className="nav-link-title">Extra</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="./activity.html">
                  Activity
                </a>
                <a className="dropdown-item" href="./gallery.html">
                  Gallery
                </a>
                <a className="dropdown-item" href="./invoice.html">
                  Invoice
                </a>
                <a className="dropdown-item" href="./search-results.html">
                  Search results
                </a>
                <a className="dropdown-item" href="./pricing.html">
                  Pricing cards
                </a>
                <a className="dropdown-item" href="./users.html">
                  Users
                </a>
                <a className="dropdown-item" href="./license.html">
                  License
                </a>
                <a className="dropdown-item" href="./music.html">
                  Music
                </a>
                <a className="dropdown-item" href="./widgets.html">
                  Widgets
                </a>
                <a className="dropdown-item" href="./wizard.html">
                  Wizard
                </a>
              </div>
            </li>
            <li className="nav-item active dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#navbar-layout"
                data-bs-toggle="dropdown"
                role="button"
                aria-expanded="true"
              >
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                    <rect x="4" y="4" width="6" height="5" rx="2" />
                    <rect x="4" y="13" width="6" height="7" rx="2" />
                    <rect x="14" y="4" width="6" height="7" rx="2" />
                    <rect x="14" y="15" width="6" height="5" rx="2" />
                  </svg>
                </span>
                <span className="nav-link-title">Layout</span>
              </a>
              <DropdownMenu>
                <DropdownItem>hello</DropdownItem>
              </DropdownMenu>
              <div className="dropdown-menu show">
                <div className="dropdown-menu-columns">
                  <div className="dropdown-menu-column">
                    <a
                      className="dropdown-item"
                      href="./layout-horizontal.html"
                    >
                      Horizontal
                    </a>
                    <a className="dropdown-item" href="./layout-vertical.html">
                      Vertical
                    </a>
                    <a
                      className="dropdown-item"
                      href="./layout-vertical-transparent.html"
                    >
                      Vertical transparent
                    </a>
                    <a
                      className="dropdown-item"
                      href="./layout-vertical-right.html"
                    >
                      Right vertical
                    </a>
                    <a className="dropdown-item" href="./layout-condensed.html">
                      Condensed
                    </a>
                    <a
                      className="dropdown-item"
                      href="./layout-condensed-dark.html"
                    >
                      Condensed dark
                    </a>
                    <a className="dropdown-item" href="./layout-combo.html">
                      Combined
                    </a>
                  </div>
                  <div className="dropdown-menu-column">
                    <a
                      className="dropdown-item"
                      href="./layout-navbar-dark.html"
                    >
                      Navbar dark
                    </a>
                    <a
                      className="dropdown-item"
                      href="./layout-navbar-sticky.html"
                    >
                      Navbar sticky
                    </a>
                    <a
                      className="dropdown-item"
                      href="./layout-navbar-overlap.html"
                    >
                      Navbar overlap
                    </a>
                    <a className="dropdown-item" href="./layout-dark.html">
                      Dark mode
                    </a>
                    <a className="dropdown-item" href="./layout-rtl.html">
                      RTL mode
                    </a>
                    <a className="dropdown-item" href="./layout-fluid.html">
                      Fluid
                    </a>
                    <a
                      className="dropdown-item active"
                      href="./layout-fluid-vertical.html"
                    >
                      Fluid vertical
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./docs/index.html">
                <span className="nav-link-icon d-md-none d-lg-inline-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
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
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <line x1="9" y1="9" x2="10" y2="9" />
                    <line x1="9" y1="13" x2="15" y2="13" />
                    <line x1="9" y1="17" x2="15" y2="17" />
                  </svg>
                </span>
                <span className="nav-link-title">Documentation</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
