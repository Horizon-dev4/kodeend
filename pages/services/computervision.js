import Meta from "../../components/Meta";

const computervision = () => {
  return (
    <>
    <Meta />
      <div className="hero_area">
        {/* header section strats */}
        <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="../index.html">
                <img src="../images/logo.png" alt="kodeend" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        {" "}
                        About
                      </a>
                    </li>
                    <li className="nav-item active">
                      <a className="nav-link" href="service.html">
                        {" "}
                        Service{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="portfolio.html">
                        {" "}
                        Portfolio{" "}
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact{" "}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* end header section */}
      </div>
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Computer Vision</h2>
          </div>
          <div>
            <p>
              Computer vision is a field of Artificial Intelligence (Ai) that
              unlock insights from digital images, videos and other visual
              inputs. AI driven computer vision to detach &amp; classify objects
              in images &amp; videos. Human sight has the advantage of lifetimes
              of context to train how to tell objects apart, how far away they
              are, whether they are moving and whether there is something wrong
              in an image. Computer vision see and understand the world through
              the eyes of machine. For that reason, Computer vision need lots of
              data. Deep learning (DL) &amp; a Convolutional Neural Network
              (CNN) these two essential technologies are used to analysis and
              unlock the power of Ai vision for your business. AI powered
              computer vision create perfect image with no manual effort, and by
              ML (Machine Learning) uses algorithmic models that enable the ai
              powered computer to teach itself about the context of visual data.
            </p>
          </div>
        </div>
      </section>
      {/* end service section */}
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
                        src="../images/location-white.png"
                        width="18px"
                        alt=""
                      />
                    </div>
                    <p>Address</p>
                  </div>
                  <div>
                    <div className="img-box">
                      <img
                        src="../images/telephone-white.png"
                        width="12px"
                        alt=""
                      />
                    </div>
                    <p>+01 1234567890</p>
                  </div>
                  <div>
                    <div className="img-box">
                      <img
                        src="../images/envelope-white.png"
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
                          <img src="../images/insta.png" alt="" />
                        </div>
                      </a>
                      <a href="">
                        <div className="insta-box b-2">
                          <img src="../images/insta.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <div className="insta-box b-3">
                          <img src="../images/insta.png" alt="" />
                        </div>
                      </a>
                      <a href="">
                        <div className="insta-box b-4">
                          <img src="../images/insta.png" alt="" />
                        </div>
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <div className="insta-box b-3">
                          <img src="../images/insta.png" alt="" />
                        </div>
                      </a>
                      <a href="">
                        <div className="insta-box b-4">
                          <img src="../images/insta.png" alt="" />
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
                      <img src="../images/fb.png" alt="" />
                    </a>
                    <a href="">
                      <img src="../images/twitter.png" alt="" />
                    </a>
                    <a href="">
                      <img src="../images/linkedin.png" alt="" />
                    </a>
                    <a href="">
                      <img src="../images/youtube.png" alt="" />
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
                  <a href="https://html.design/">Free Html Templates</a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* footer section */}
      </div>
    </>
  );
};

export default computervision;
