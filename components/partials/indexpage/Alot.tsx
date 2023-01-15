// import Problem from "./problem";

export default function Alot() {
  return (
    <>
      <div className="col-lg-6">
        <div className="row row-cards">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Traffic summary</h3>
                <div id="chart-mentions" className="chart-lg"></div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <p className="mb-3">
                  Using Storage <strong>6854.45 MB </strong>of 8 GB
                </p>
                <div className="progress progress-separated mb-3">
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: "44%" }}
                  ></div>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "19%" }}
                  ></div>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "9%" }}
                  ></div>
                </div>
                <div className="row">
                  <div className="col-auto d-flex align-items-center pe-2">
                    <span className="legend me-2 bg-primary"></span>
                    <span>Regular</span>
                    <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                      915MB
                    </span>
                  </div>
                  <div className="col-auto d-flex align-items-center px-2">
                    <span className="legend me-2 bg-info"></span>
                    <span>System</span>
                    <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                      415MB
                    </span>
                  </div>
                  <div className="col-auto d-flex align-items-center px-2">
                    <span className="legend me-2 bg-success"></span>
                    <span>Shared</span>
                    <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                      201MB
                    </span>
                  </div>
                  <div className="col-auto d-flex align-items-center ps-2">
                    <span className="legend me-2"></span>
                    <span>Free</span>
                    <span className="d-none d-md-inline d-lg-none d-xxl-inline ms-2 text-muted">
                      612MB
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body p-2 text-center">
                <div className="text-end text-green">
                  <span className="text-green d-inline-flex align-items-center lh-1">
                    6%{" "}
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
                      <polyline points="3 17 9 11 13 15 21 7" />
                      <polyline points="14 7 21 7 21 14" />
                    </svg>
                  </span>
                </div>
                <div className="h1 m-0">43</div>
                <div className="text-muted mb-3">New Tickets</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body p-2 text-center">
                <div className="text-end text-red">
                  <span className="text-red d-inline-flex align-items-center lh-1">
                    -2%{" "}
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
                      <polyline points="3 7 9 13 13 9 21 17" />
                      <polyline points="21 10 21 17 14 17" />
                    </svg>
                  </span>
                </div>
                <div className="h1 m-0">95</div>
                <div className="text-muted mb-3">Daily Earnings</div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body p-2 text-center">
                <div className="text-end text-green">
                  <span className="text-green d-inline-flex align-items-center lh-1">
                    9%{" "}
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
                      <polyline points="3 17 9 11 13 15 21 7" />
                      <polyline points="14 7 21 7 21 14" />
                    </svg>
                  </span>
                </div>
                <div className="h1 m-0">7</div>
                <div className="text-muted mb-3">New Replies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header border-0">
            <div className="card-title">Development activity</div>
          </div>
          <div className="position-relative">
            <div className="position-absolute top-0 left-0 px-3 mt-1 w-50">
              <div className="row g-2">
                <div className="col-auto">
                  <div
                    className="chart-sparkline chart-sparkline-square"
                    id="sparkline-activity"
                  ></div>
                </div>
                <div className="col">
                  <div>Today's Earning: $4,262.40</div>
                  <div className="text-muted">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-inline text-green"
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
                      <polyline points="3 17 9 11 13 15 21 7" />
                      <polyline points="14 7 21 7 21 14" />
                    </svg>
                    +5% more than yesterday
                  </div>
                </div>
              </div>
            </div>
            <div id="chart-development-activity"></div>
          </div>
          <div className="card-table table-responsive">
            <table className="table table-vcenter">
              <thead>
                <tr>
                  <th>User</th>
                  <th>Commit</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-1">
                    <span
                      className="avatar avatar-sm"
                      style={{
                        backgroundImage: "url(./static/avatars/002m.jpg)",
                      }}
                    ></span>
                  </td>
                  <td className="td-truncate">
                    <div className="text-truncate">
                      Fix dart Sass compatibility (#29755)
                    </div>
                  </td>
                  <td className="text-nowrap text-muted">28 Nov 2019</td>
                </tr>
                <tr>
                  <td className="w-1">
                    <span className="avatar avatar-sm">JL</span>
                  </td>
                  <td className="td-truncate">
                    <div className="text-truncate">
                      Change deprecated html tags to text decoration classes
                      (#29604)
                    </div>
                  </td>
                  <td className="text-nowrap text-muted">27 Nov 2019</td>
                </tr>
                <tr>
                  <td className="w-1">
                    <span
                      className="avatar avatar-sm"
                      style={{
                        backgroundImage: "url(./static/avatars/002m.jpg)",
                      }}
                    ></span>
                  </td>
                  <td className="td-truncate">
                    <div className="text-truncate">
                      justify-content:between ⇒ justify-content:space-between
                      (#29734)
                    </div>
                  </td>
                  <td className="text-nowrap text-muted">26 Nov 2019</td>
                </tr>
                <tr>
                  <td className="w-1">
                    <span
                      className="avatar avatar-sm"
                      style={{
                        backgroundImage: "url(./static/avatars/002m.jpg)",
                      }}
                    ></span>
                  </td>
                  <td className="td-truncate">
                    <div className="text-truncate">
                      Update change-version.js (#29736)
                    </div>
                  </td>
                  <td className="text-nowrap text-muted">26 Nov 2019</td>
                </tr>
                <tr>
                  <td className="w-1">
                    <span
                      className="avatar avatar-sm"
                      style={{
                        backgroundImage: "url(./static/avatars/002m.jpg)",
                      }}
                    ></span>
                  </td>
                  <td className="td-truncate">
                    <div className="text-truncate">
                      Regenerate package-lock.json (#29730)
                    </div>
                  </td>
                  <td className="text-nowrap text-muted">25 Nov 2019</td>
                </tr>
                <tr>
                  <td className="w-1">
                    <span
                      className="avatar avatar-sm"
                      style={{
                        backgroundImage: "url(./static/avatars/002m.jpg)",
                      }}
                    ></span>
                  </td>
                  <td className="td-truncate">
                    <div className="text-truncate">Some minor text tweaks</div>
                  </td>
                  <td className="text-nowrap text-muted">24 Nov 2019</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* 
      <div className="col-md-8">
        <div className="card" style={{ height: "calc(24rem + 10px)" }}>
          <div className="card-body card-body-scrollable card-body-scrollable-shadow">
            <div className="divide-y-4">
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span className="avatar">JL</span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Jeffie Lewzey</strong> commented on your{" "}
                      <strong>"I'm not a witch."</strong> post.
                    </div>
                    <div className="text-muted">yesterday</div>
                  </div>
                  <div className="col-auto align-self-center">
                    <div className="badge bg-primary"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/002m.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      It's <strong>Mallory Hulme</strong>'s birthday. Wish him
                      well!
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                  <div className="col-auto align-self-center">
                    <div className="badge bg-primary"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/003m.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Dunn Slane</strong> posted{" "}
                      <strong>"Well, what do you want?"</strong>.
                    </div>
                    <div className="text-muted">today</div>
                  </div>
                  <div className="col-auto align-self-center">
                    <div className="badge bg-primary"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/000f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Emmy Levet</strong> created a new project{" "}
                      <strong>Morning alarm clock</strong>.
                    </div>
                    <div className="text-muted">4 days ago</div>
                  </div>
                  <div className="col-auto align-self-center">
                    <div className="badge bg-primary"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/001f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Maryjo Lebarree</strong> liked your photo.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span className="avatar">EP</span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Egan Poetz</strong> registered new client as{" "}
                      <strong>Trilia</strong>.
                    </div>
                    <div className="text-muted">yesterday</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/002f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Kellie Skingley</strong> closed a new deal on
                      project <strong>Pen Pineapple Apple Pen</strong>.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/003f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Christabel Charlwood</strong> created a new
                      project for <strong>Wikibox</strong>.
                    </div>
                    <div className="text-muted">4 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span className="avatar">HS</span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Haskel Shelper</strong> change status of{" "}
                      <strong>Tabler Icons</strong> from <strong>open</strong>{" "}
                      to <strong>closed</strong>.
                    </div>
                    <div className="text-muted">today</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/006m.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Lorry Mion</strong> liked{" "}
                      <strong>Tabler UI Kit</strong>.
                    </div>
                    <div className="text-muted">yesterday</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/004f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Leesa Beaty</strong> posted new video.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/007m.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Perren Keemar</strong> and 3 others followed you.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span className="avatar">SA</span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Sunny Airey</strong> upload 3 new photos to
                      category <strong>Inspirations</strong>.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/000f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Geoffry Flaunders</strong> made a{" "}
                      <strong>$10</strong> donation.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/000f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Thatcher Keel</strong> created a profile.
                    </div>
                    <div className="text-muted">3 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/000f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Dyann Escala</strong> hosted the event{" "}
                      <strong>Tabler UI Birthday</strong>.
                    </div>
                    <div className="text-muted">4 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span
                      className="avatar"
                      style={{
                        backgroundImage: "url(./static/avatars/000f.jpg)",
                      }}
                    ></span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Avivah Mugleston</strong> mentioned you on{" "}
                      <strong>Best of 2020</strong>.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="row">
                  <div className="col-auto">
                    <span className="avatar">AA</span>
                  </div>
                  <div className="col">
                    <div className="text-truncate">
                      <strong>Arlie Armstead</strong> sent a Review Request to{" "}
                      <strong>Amanda Blake</strong>.
                    </div>
                    <div className="text-muted">2 days ago</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row row-cards">
          <div className="col-12">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-blue text-white avatar">
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
                        <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2" />
                        <path d="M12 3v3m0 12v3" />
                      </svg>
                    </span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">132 Sales</div>
                    <div className="text-muted">12 waiting payments</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-green text-white avatar">
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
                        <circle cx="6" cy="19" r="2" />
                        <circle cx="17" cy="19" r="2" />
                        <path d="M17 17h-11v-14h-2" />
                        <path d="M6 5l14 1l-1 7h-13" />
                      </svg>
                    </span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">78 Orders</div>
                    <div className="text-muted">32 shipped</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-yellow text-white avatar">
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
                        <circle cx="9" cy="7" r="4" />
                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
                      </svg>
                    </span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">1352 Members</div>
                    <div className="text-muted">163 registered today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-twitter text-white avatar">
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
                        <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                      </svg>
                    </span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">623 Shares</div>
                    <div className="text-muted">16 today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card card-sm">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col-auto">
                    <span className="bg-facebook text-white avatar">
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
                        <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                      </svg>
                    </span>
                  </div>
                  <div className="col">
                    <div className="font-weight-medium">132 Likes</div>
                    <div className="text-muted">21 today</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-12 col-lg-8">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Most Visited Pages</h3>
          </div>
          <div className="card-table table-responsive">
            <table className="table table-vcenter">
              <thead>
                <tr>
                  <th>Page name</th>
                  <th>Visitors</th>
                  <th>Unique</th>
                  <th colSpan={2}>Bounce rate</th>
                </tr>
              </thead>
              <tr>
                <td>
                  /about.html
                  <a href="#" className="ms-1" aria-label="Open website">
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
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                  </a>
                </td>
                <td className="text-muted">4,896</td>
                <td className="text-muted">3,654</td>
                <td className="text-muted">82.54%</td>
                <td className="text-end w-1">
                  <div
                    className="chart-sparkline chart-sparkline-sm"
                    id="sparkline-bounce-rate-1"
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  /special-promo.html
                  <a href="#" className="ms-1" aria-label="Open website">
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
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                  </a>
                </td>
                <td className="text-muted">3,652</td>
                <td className="text-muted">3,215</td>
                <td className="text-muted">76.29%</td>
                <td className="text-end w-1">
                  <div
                    className="chart-sparkline chart-sparkline-sm"
                    id="sparkline-bounce-rate-2"
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  /news/1,new-ui-kit.html
                  <a href="#" className="ms-1" aria-label="Open website">
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
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                  </a>
                </td>
                <td className="text-muted">3,256</td>
                <td className="text-muted">2,865</td>
                <td className="text-muted">72.65%</td>
                <td className="text-end w-1">
                  <div
                    className="chart-sparkline chart-sparkline-sm"
                    id="sparkline-bounce-rate-3"
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  /lorem-ipsum-dolor-sit-amet-very-long-url.html
                  <a href="#" className="ms-1" aria-label="Open website">
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
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                  </a>
                </td>
                <td className="text-muted">986</td>
                <td className="text-muted">865</td>
                <td className="text-muted">44.89%</td>
                <td className="text-end w-1">
                  <div
                    className="chart-sparkline chart-sparkline-sm"
                    id="sparkline-bounce-rate-4"
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  /colors.html
                  <a href="#" className="ms-1" aria-label="Open website">
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
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                  </a>
                </td>
                <td className="text-muted">912</td>
                <td className="text-muted">822</td>
                <td className="text-muted">41.12%</td>
                <td className="text-end w-1">
                  <div
                    className="chart-sparkline chart-sparkline-sm"
                    id="sparkline-bounce-rate-5"
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  /docs/index.html
                  <a href="#" className="ms-1" aria-label="Open website">
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
                      <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
                      <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
                    </svg>
                  </a>
                </td>
                <td className="text-muted">855</td>
                <td className="text-muted">798</td>
                <td className="text-muted">32.65%</td>
                <td className="text-end w-1">
                  <div
                    className="chart-sparkline chart-sparkline-sm"
                    id="sparkline-bounce-rate-6"
                  ></div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div> */}
      <div className="col-md-6 col-lg-4">
        <a
          href="https://github.com/sponsors/codecalm"
          className="card card-sponsor"
          target="_blank"
          rel="noopener"
          style={{
            backgroundImage: "url(./static/sponsor-banner-homepage.svg)",
          }}
          aria-label="Sponsor Tabler!"
        >
          <div className="card-body"></div>
        </a>
      </div>
      <div className="col-md-6 col-lg-4">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Social Media Traffic</h3>
          </div>
          <table className="table card-table table-vcenter">
            <thead>
              <tr>
                <th>Network</th>
                <th colSpan={2}>Visitors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Instagram</td>
                <td>3,550</td>
                <td className="w-50">
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "71.0%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Twitter</td>
                <td>1,798</td>
                <td className="w-50">
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "35.96%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Facebook</td>
                <td>1,245</td>
                <td className="w-50">
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "24.9%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>TikTok</td>
                <td>986</td>
                <td className="w-50">
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "19.72%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Pinterest</td>
                <td>854</td>
                <td className="w-50">
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "17.08%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>VK</td>
                <td>650</td>
                <td className="w-50">
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "13.0%" }}
                    ></div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Pinterest</td>
                <td>420</td>
                <td className="w-50">
                  <div className="progress progress-xs">
                    <div
                      className="progress-bar bg-primary"
                      style={{ width: "8.4%" }}
                    ></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* problem start */}
      {/* <Problem /> */}
      {/* problem end */}

      <div className="col-12">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Invoices</h3>
          </div>
          <div className="card-body border-bottom py-3">
            <div className="d-flex">
              <div className="text-muted">
                Show
                <div className="mx-2 d-inline-block">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    value="8"
                    size={3}
                    aria-label="Invoices count"
                  />
                </div>
                entries
              </div>
              <div className="ms-auto text-muted">
                Search:
                <div className="ms-2 d-inline-block">
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    aria-label="Search invoice"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="table-responsive">
            <table className="table card-table table-vcenter text-nowrap datatable">
              <thead>
                <tr>
                  <th className="w-1">
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select all invoices"
                    />
                  </th>
                  <th className="w-1">
                    No.{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-sm text-dark icon-thick"
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
                      <polyline points="6 15 12 9 18 15" />
                    </svg>
                  </th>
                  <th>Invoice Subject</th>
                  <th>Client</th>
                  <th>VAT No.</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001401</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      Design Works
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-us"></span>
                    Carlson Limited
                  </td>
                  <td>87956621</td>
                  <td>15 Dec 2017</td>
                  <td>
                    <span className="badge bg-success me-1"></span> Paid
                  </td>
                  <td>$887</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001402</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      UX Wireframes
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-gb"></span>
                    Adobe
                  </td>
                  <td>87956421</td>
                  <td>12 Apr 2017</td>
                  <td>
                    <span className="badge bg-warning me-1"></span> Pending
                  </td>
                  <td>$1200</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001403</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      New Dashboard
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-de"></span>
                    Bluewolf
                  </td>
                  <td>87952621</td>
                  <td>23 Oct 2017</td>
                  <td>
                    <span className="badge bg-warning me-1"></span> Pending
                  </td>
                  <td>$534</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001404</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      Landing Page
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-br"></span>
                    Salesforce
                  </td>
                  <td>87953421</td>
                  <td>2 Sep 2017</td>
                  <td>
                    <span className="badge bg-secondary me-1"></span> Due in 2
                    Weeks
                  </td>
                  <td>$1500</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001405</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      Marketing Templates
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-pl"></span>
                    Printic
                  </td>
                  <td>87956621</td>
                  <td>29 Jan 2018</td>
                  <td>
                    <span className="badge bg-danger me-1"></span> Paid Today
                  </td>
                  <td>$648</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001406</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      Sales Presentation
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-br"></span>
                    Tabdaq
                  </td>
                  <td>87956621</td>
                  <td>4 Feb 2018</td>
                  <td>
                    <span className="badge bg-secondary me-1"></span> Due in 3
                    Weeks
                  </td>
                  <td>$300</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001407</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      Logo & Print
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-us"></span>
                    Apple
                  </td>
                  <td>87956621</td>
                  <td>22 Mar 2018</td>
                  <td>
                    <span className="badge bg-success me-1"></span> Paid Today
                  </td>
                  <td>$2500</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-check-input m-0 align-middle"
                      type="checkbox"
                      aria-label="Select invoice"
                    />
                  </td>
                  <td>
                    <span className="text-muted">001408</span>
                  </td>
                  <td>
                    <a href="invoice.html" className="text-reset" tabIndex={-1}>
                      Icons
                    </a>
                  </td>
                  <td>
                    <span className="flag flag-country-pl"></span>
                    Tookapic
                  </td>
                  <td>87956621</td>
                  <td>13 May 2018</td>
                  <td>
                    <span className="badge bg-success me-1"></span> Paid Today
                  </td>
                  <td>$940</td>
                  <td className="text-end">
                    <span className="dropdown">
                      <button
                        className="btn dropdown-toggle align-text-top"
                        data-bs-boundary="viewport"
                        data-bs-toggle="dropdown"
                      >
                        Actions
                      </button>
                      <div className="dropdown-menu dropdown-menu-end">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </div>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer d-flex align-items-center">
            <p className="m-0 text-muted">
              Showing <span>1</span> to <span>8</span> of <span>16</span>{" "}
              entries
            </p>
            <ul className="pagination m-0 ms-auto">
              <li className="page-item disabled">
                <a
                  className="page-link"
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
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
                    <polyline points="15 6 9 12 15 18" />
                  </svg>
                  prev
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  next
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
                    <polyline points="9 6 15 12 9 18" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
