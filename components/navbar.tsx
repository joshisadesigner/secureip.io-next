import Link from "next/link";

export default function Navbar():JSX.Element {
  return (
    <header>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand" href="#">
              <img className="team__ceo" src="./assets/images/logo-sip-h.svg" alt="Secure IP Logo" />
            </a>
          </div>
          {/*Collect the nav links, forms, and other content for toggling*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active">
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="wholesale.html">
                  <a>Wholesale</a>
                </Link>
              </li>
              <li>
                <Link href="retail.html">
                  <a>Retail</a>
                </Link>
              </li>
              <li>
                <Link href="our-products.html">
                  <a>Our Products</a>
                </Link>

              </li>
              <li>
                <Link href="connectwithus.html">
                  <a>Connect With Us</a>
                </Link>

              </li>
              <li>
                <Link href="news.html">
                  <a>News</a>
                </Link>
              </li>
            </ul>
          </div>
          {/*/.navbar-collapse*/}
        </div>
        {/*/.container-fluid*/}
      </nav>
    </header>
  )
}