
const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        {/* info section */}
        <section className="info_section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-4 mb-md-0 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_info">
                  <h5>Informations</h5>
                  <p>
                    ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-4 mb-md-0 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_contact">
                  <h5>About Shop</h5>
                  <div>
                    <div className="img-box">
                      <img
                        src="/assets/images/location-white.png"
                        width="18px"
                        alt=""
                      />
                    </div>
                    <p>Address</p>
                  </div>
                  <div>
                    <div className="img-box">
                      <img
                        src="/assets/images/telephone-white.png"
                        width="12px"
                        alt=""
                      />
                    </div>
                    <p>+01 1234567890</p>
                  </div>
                  <div>
                    <div className="img-box">
                      <img
                        src="/assets/images/envelope-white.png"
                        width="18px"
                        alt=""
                      />
                    </div>
                    <p>demo@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4 mb-md-0 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_insta">
                  <h5>Instagram</h5>
                  <div className="insta_container">
                    <div>
                      <a href="">
                        <div className="insta-box b-1">
                          <img src="/assets/images/insta.png" alt="" />
                        </div>
                      </a>
                      <a href="">
                        <div className="insta-box b-2">
                          <img src="/assets/images/insta.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <div className="insta-box b-3">
                          <img src="/assets/images/insta.png" alt="" />
                        </div>
                      </a>
                      <a href="">
                        <div className="insta-box b-4">
                          <img src="/assets/images/insta.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <div className="insta-box b-3">
                          <img src="/assets/images/insta.png" alt="" />
                        </div>
                      </a>
                      <a href="">
                        <div className="insta-box b-4">
                          <img src="/assets/images/insta.png" alt="" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_form">
                  <h5>Newsletter</h5>
                  <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </form>
                  <div className="social_box">
                    <a href="">
                      <img src="/assets/images/fb.png" alt="" />
                    </a>
                    <a href="">
                      <img src="/assets/images/twitter.png" alt="" />
                    </a>
                    <a href="">
                      <img src="/assets/images/linkedin.png" alt="" />
                    </a>
                    <a href="">
                      <img src="/assets/images/youtube.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <section className="container-fluid footer_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <p>
                  © 2020 All Rights Reserved By
                  <a href="#">Kodeend</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* footer section */}
      </div>
    </>
  )
}

export default Footer
