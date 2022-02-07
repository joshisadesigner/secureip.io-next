import { Routes } from "../shared"
import ActiveLink from "./ActiveLink";

export default function Navbar():JSX.Element {
  return (
    <header>
      <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <ActiveLink activeClassName="active" href="/">
            <a className="navbar-brand">
              <img className="team__ceo" src="./assets/images/logo-sip-h.svg" alt="Secure IP Logo" />
            </a>
          </ActiveLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <div className="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">

            <ul className="nav navbar-nav">
              <li className="nav-item">
                <ActiveLink activeClassName="active" href={Routes.CloudServices}>
                  <a className="nav-link">Cloud Services</a>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink activeClassName="active" href={Routes.Retail}>
                  <a className="nav-link">Retail</a>
                </ActiveLink>
              </li>
              <li className="nav-item">
                <ActiveLink activeClassName="active" href={Routes.Wholesale}>
                  <a className="nav-link">Wholesale</a>
                </ActiveLink>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                   data-bs-toggle="dropdown" aria-expanded="false">
                  Our Products
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <ActiveLink activeClassName="active" href={Routes.LockStorage}>
                      <a className="dropdown-item">Lock Storage</a>
                    </ActiveLink>
                  </li>
                  <li>
                    <ActiveLink activeClassName="active" href={Routes.PushNotificationConsole}>
                      <a className="dropdown-item">Push Notification Console</a>
                    </ActiveLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <ActiveLink activeClassName="active" href={Routes.News}>
                  <a className="nav-link">News</a>
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}