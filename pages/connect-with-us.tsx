import Image from "next/image";
import GoogleMap from "../components/google-map";

export default function ConnectWithUs(): JSX.Element {
  return (
    <>
      <div className="masthead">
        <div className="container m-t-m">
          <div className="row">
            <div className="col-md-6 animated slideInLeft">
              <div className="d-md-none">
                <h2 className="animated slideInRight m-t-none">
                  <span className="text-brand-1 text-size-huge m-l-reverse">QUALITY</span>
                </h2>
                <p className="m-b-lg">
                  The reliability and competitive prices of our services are the keys to our customers satisfaction across
                  the globe.
                </p>
              </div>
              <form id="contactform" method="post" action="scripts/connectWithUs.php">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label data-localize="namefieldlabel" htmlFor="name">Name</label>
                    <input data-localize="namefieldinput" type="text" className="form-control small-text" id="name"
                           name="username"
                           placeholder="Enter your name" required/>
                  </div>
                  <div className="col-md-6">
                    <label data-localize="lastnamefieldlabel" htmlFor="name">Last name</label>
                    <input data-localize="lastnamefieldinput" type="text" className="form-control small-text"
                           id="lastname"
                           name="userlastname" placeholder="Enter your last name" required/>
                  </div>
                  <div className="col-md-6">
                    <label data-localize="companyfieldlabel" htmlFor="company">Company</label>
                    <input data-localize="companyfieldinput" type="text" className="form-control small-text"
                           id="company"
                           name="company" placeholder="Enter your company name" required/>
                  </div>
                  <div className="col-md-6">
                    <label data-localize="positionfieldlabel" htmlFor="phone">Job title position</label>
                    <input data-localize="positionfieldinput" type="text" className="form-control small-text"
                           id="position"
                           name="position" placeholder="Enter your job title position" required/>
                  </div>
                  <div className="col-md-12">
                    <label data-localize="phonefieldlabel" htmlFor="phone">Telephone number</label>

                    <div className="input-group">
                      <span className="input-group-text" id="countryselector">
                        <select required id="countrySelector" className="country__select" name="Country"
                                data-default-option="Select country"
                                data-selected-country="" data-url-countries="/TopUp/Countries" data-val="true"
                                data-val-required="Country required."/>
                        <Image
                          id="countryflag"
                          className="country__img"
                          src="/assets/images/flags/globe.svg"
                          alt="Select country"
                          height={18}
                          width={18}
                        />
                        <span id="countrycode"/>
                      </span>
                      <input
                        data-localize="phonefieldinput"
                        type="text"
                        className="form-control small-text country__phone"
                        id="phone"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                      />
                      <div className="input-group-text">
                        Mobile&nbsp;
                        <input type="checkbox" name="ismobile"/>
                      </div>
                    </div>
                    {/*<div className="input-group">*/}
                    {/*  <input data-localize="phonefieldinput" type="text" className="form-control" id="phone" name="phone" placeholder="Enter your phone number" />*/}
                    {/*  <span className="input-group-addon">*/}
                    {/*    Mobile <input type="checkbox" name="ismobile" />*/}
                    {/*  </span>*/}
                    {/*</div> */}
                  </div>
                  <div className="col-md-12">
                    <label data-localize="emailfieldlabel" htmlFor="email">Email address</label>
                    <input
                      data-localize="emailfieldinput"
                      type="email"
                      className="form-control small-text"
                      id="emailtest"
                      name="email"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label data-localize="messagelabel" htmlFor="message">Message</label>
                    <textarea
                      data-localize="messagetextbox"
                      className="form-control small-text"
                      id="message"
                      name="message"
                      // rows="4"
                      placeholder="Enter your email message"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <div className="recaptcha">
                      <div
                        className="g-recaptcha"
                        id="reCaptcha"
                        data-sitekey="6LdE1REUAAAAAGTvrLRLijEGf-IrJf5S67Rp3awg"
                      />
                      <input
                        type="hidden"
                        className="hiddenRecaptcha"
                        name="hiddenRecaptcha"
                        id="hiddenRecaptcha"
                        required
                      />
                    </div>
                    <div id="formresult"/>
                  </div>
                  <div className="col-md-12">
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                      <button data-localize="resetbutton" type="reset" className="btn btn-danger w-50">
                        Clear
                      </button>
                      <button data-localize="sendbutton" type="submit" name="submit"
                              className="btn btn-primary w-50">Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="hidden-loading">
                <div className="loading">
                  <div className="loading__image-container">
                    <img className="loading__image-container__image pulse" src="./assets/images/logo-secureip.svg"
                         alt="Secure IP"/>
                  </div>
                  <div className="loading__text-container">
                    <span className="loading__text-container__text">Sending</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-none d-md-block">
                <h2 className="animated slideInRight m-t-none">
                  <span className="text-brand-1 text-size-huge m-l-reverse">QUALITY</span>
                </h2>
                <p className="m-b-lg">
                  The reliability and competitive prices of our services are the keys to our customers satisfaction across
                  the globe.
                </p>
              </div>
              <GoogleMap />
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="row">
          <div className="col-md-6 animated slideInRight">
          </div>
        </div>
      </section>
    </>
  )
}