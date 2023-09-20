function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark fw-semibold p-3"
        style={{ backgroundColor: "#bd4141" }}
      >
        <div className="container-fluid mx-5">
          <a className="navbar-brand" href="#">
            Simple Header
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-row-reverse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="modal"
                  data-bs-target="#about-modal"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-disabled="true">
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
