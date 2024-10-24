import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <header className="bg-light py-3 mb-4 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none"
            >
              <h3>My Website</h3>
            </a>

            <ul className="nav gap-4">
              <li className="nav-item">
                <Link to="/home"> Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact"> Contact</Link>
              </li>
              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/counter">Counter</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
