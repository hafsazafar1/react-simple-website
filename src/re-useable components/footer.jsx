import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="bg-light text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4">
              <h5 className="text-uppercase">About Us</h5>
              <p>
                We are a company dedicated to providing the best services for
                our clients. Your satisfaction is our priority.
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/home">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/counter">Counter</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
        
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-dark">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center p-3 bg-dark text-light">
          © 2024 My Website
        </div>
      </footer>
    </>
  );
}
export default Footer;
