import Link from "next/link";
import { SiteRoutes } from "../shared"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer():JSX.Element {
    return (
      <footer className="bg-brand-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <div className="m-b-xl">
                <h3>CALL US NOW</h3>
                <p>
                  <a href="https://goo.gl/maps/PGnnTy6Skfu" target="_blank">
                    624 S Grand Ave Suite 110<br/>
                    Los Angeles, CA 90017
                  </a>
                </p>
                <p>
                  <strong>Corporate Offices: </strong><br/>
                  <a className="call__num" href="tel:1-310-363-7720">+1 (310) 363-7720</a>
                </p>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <h3>SOCIAL NETWORKS</h3>
              <div className="">
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/Secure-IP-900454716689511/" target="_blank" className="social_fb">
                      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
                      <span hidden aria-hidden="true">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/@SECURE_IP" target="_blank" className="social_tw">
                      <FontAwesomeIcon icon={["fab", "twitter"]} />
                      <span hidden aria-hidden="true">Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="m-b-xl">
                <h3>WORK WITH US</h3>
                <p>Would you like to join our team? <br />
                  Send your resume:
                  <br />
                  <a href="mailto:info@secureip.io">info@secureip.io</a>
                </p>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="m-b-xl">
                <h3>GET CONNECTED</h3>
                <p>We provide innovative solutions to our customers through multiple products and services.</p>
                <Link href={SiteRoutes.ConnectWithUs}><a className="btn btn-link">CONNECT WITH US</a></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="text-center small">Copyright &copy; 2018 Secure IP. All Rights Reserved.</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}