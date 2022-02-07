export default function Footer():JSX.Element {
    return (
      <footer className="bg-brand-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="m-b-xl">
                <h3>CALL US NOW</h3>
                <p>
                  <strong>Corporate Offices: </strong><br/>br
                  <a className="call__num" href="tel:1-310-363-7720">+1 (310) 363-7720</a>
                </p>
                <p>
                  <a href="https://goo.gl/maps/PGnnTy6Skfu" target="_blank">800 S. Hope Street Ste 120.
                    <br/>Los Angeles, CA 90017</a>
                </p>
              </div>
            </div>
            <div className="col-sm-4">
              <h3>SOCIAL NETWORKS</h3>
              <div className="">
                <ul className="social">
                  <li>
                    <a href="https://www.facebook.com/Secure-IP-900454716689511/" target="_blank" className="social_fb">
                      <span hidden aria-hidden="true">Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/@SECURE_IP" target="_blank" className="social_tw">
                      <span hidden aria-hidden="true">Twitter</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="m-b-xl">
                <h3>WORK WITH US</h3>
                <p>Would you like a career in telecommunications? Send your resume to:
                  <br/>
                    <a href="mailto:info@secureip.io">info@secureip.io</a>
                    <br/>and join our team.</p>
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