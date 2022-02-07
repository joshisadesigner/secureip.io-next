import Link from "next/link";

export default function Navbar():JSX.Element {
  return (
    <header>
      <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <img className="team__ceo" src="./assets/images/logo-sip-h.svg" alt="Secure IP Logo" />
            </a>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">

            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <Link href="/coud-services">
                  <a className="nav-link">Cloud Services</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/ratail">
                  <a className="nav-link">Retail</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="wholesale">
                  <a className="nav-link">Wholesale</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/our-products">
                  <a className="nav-link">Our Products</a>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Our Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link href="/products/lock-storage">
                      <a className="dropdown-item">Lock Storage</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/push-notification-console">
                      <a className="dropdown-item">Push Notification Console</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link href="/news">
                  <a className="nav-link">News</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}