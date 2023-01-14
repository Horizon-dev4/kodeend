import Image from "next/image";
import Script from "next/script";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Home = () => {
  return (
    <>
      <Meta />

      <div className="hero_area">
        {/* header section strats */}
        <Header />
        {/* end header section */}
        {/* slider section */}
        <section className="slider_section">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail_box">
                        <h1>
                          WE HELP YOU TO MAKE <br />
                          BETTER <span>SOFTWARE</span>
                        </h1>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking
                        </p>
                        <a href="" className="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="img-box">
                        <img src="/assets/images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail_box">
                        <h1>
                          WE HELP YOU TO MAKE <br />
                          BETTER <span>SOFTWARE</span>
                        </h1>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking
                        </p>
                        <a href="" className="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="img-box">
                        <img src="/assets/images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="detail_box">
                        <h1>
                          WE HELP YOU TO MAKE <br />
                          BETTER <span>SOFTWARE</span>
                        </h1>
                        <p>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking
                        </p>
                        <a href="" className="">
                          {" "}
                          Read More{" "}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="img-box">
                        <img src="/assets/images/slider-img.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel_btn-container">
              <a
                className="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
      
      {/* service section */}
      <section className="service_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Our Services</h2>
          </div>
          <div className="service_container">
            <div className="box">
              <div className="img-box">
                <img src="/assets/images/s-1.png" className="img1" alt="" />
                <img
                  src="/assets/images/s-1-color.png"
                  className="img2"
                  alt=""
                />
              </div>
              <div className="detail-box">
                <h5>Computer Vision</h5>
                <p>
                  Computer vision is a field of Artificial Intelligence (Ai)
                  that unlock insights from digital images, videos and other
                  visual inputs.
                </p>
              </div>
              <div className="btn-box2">
                <a href="./services/computervision.html"> Read More </a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="/assets/images/s-3.png" className="img1" alt="" />
                <img
                  src="/assets/images/s-3-color.png"
                  className="img2"
                  alt=""
                />
              </div>
              <div className="detail-box">
                <h5>Artificial Intelligence (AI)</h5>
                <p>
                  Artificial Intelligence is vastly using now a days. Artificial
                  Intelligence also known as Machine Intelligence.
                </p>
              </div>
              <div className="btn-box2">
                <a href=""> Read More </a>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src="/assets/images/s-2.png" className="img1" alt="" />
                <img
                  src="/assets/images/s-2-color.png"
                  className="img2"
                  alt=""
                />
              </div>
              <div className="detail-box">
                <h5>Web Development</h5>
                <p>
                  The term refers to the process of designing, developing, and
                  maintaining websites.
                </p>
              </div>
              <div className="btn-box2">
                <a href=""> Read More </a>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="service.html"> Read More </a>
          </div>
        </div>
      </section>
      {/* end service section */}
      {/* about section */}
      <section className="about_section layout_padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="img-box">
                {/* <img src="/assets/images/about-img.png" alt="" /> */}
                <Image src="/assets/images/about-img.png" width={548} height={408} alt="about Us Image" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit
                </p>
                <a href=""> Read More </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
      {/* portfolio section */}
      <section className="portfolio_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Portfolio</h2>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority
            </p>
          </div>
          <div className="layout_padding2-top">
            <div className="row">
              <div className="col-md-4 col-sm-6">
                <div className="img-box">
                  <img src="/assets/images/p-1.jpg" alt="" />
                  <a href="">
                    <img src="/assets/images/link.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="img-box">
                  <img src="/assets/images/p-2.jpg" alt="" />
                  <a href="">
                    <img src="/assets/images/link.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="img-box">
                  <img src="/assets/images/p-3.jpg" alt="" />
                  <a href="">
                    <img src="/assets/images/link.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="img-box">
                  <img src="/assets/images/p-4.jpg" alt="" />
                  <a href="">
                    <img src="/assets/images/link.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="img-box">
                  <img src="/assets/images/p-5.jpg" alt="" />
                  <a href="">
                    <img src="/assets/images/link.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-6">
                <div className="img-box">
                  <img src="/assets/images/p-6.jpg" alt="" />
                  <a href="">
                    <img src="/assets/images/link.png" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href=""> View More </a>
          </div>
        </div>
      </section>
      {/* end portfolio section */}
      {/* contact section */}
      <section className="contact_section layout_padding-bottom">
        <div className="container">
          <div className="heading_container">
            <h2>Request A Call Back</h2>
          </div>
          <div className="">
            <div className="">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="contact-form">
                    <form action="">
                      <div>
                        <input type="text" placeholder="Full Name " />
                      </div>
                      <div>
                        <input type="text" placeholder="Phone Number" />
                      </div>
                      <div>
                        <input type="email" placeholder="Email Address" />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Message"
                          className="input_message"
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn_on-hover">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end contact section */}
      
      <Footer />

      <Script
        type="text/javascript"
        src="/assets/js/jquery-3.4.1.min.js"
      ></Script>
      <Script type="text/javascript" src="/assets/js/bootstrap.js"></Script>
    </>
  );
};

export default Home;
