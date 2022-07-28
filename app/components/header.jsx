import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <nav className="header navbar navbar-expand-lg ">
      <div className="print container-fluid">
        <a className="navbar-brand" href="#">
          IRCTC
        </a>
        <button
          className="print navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="print collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <Link to="/scan-qr" className="nav-link">
                Scan QR Code
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/reserved" className="nav-link">
                Reserved Booking
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Unreserved Booking
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Platform Booking
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
