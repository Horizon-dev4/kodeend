import Image from "next/image";
import Link from "next/link";
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
                        Elevate Your Software <br /> 
                        with <span>Kodeend IT Solutions</span>
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
                        Elevate Your Software <br /> 
                        with <span>Kodeend IT Solutions</span>
                        </h1>
                        <p>
                        Unlock the full potential of your business with our web-apps, AI and data science expertise.
                        </p>
                        <a href="" className="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="img-box">
                        <img src="/assets/images/slider-img2.png" alt="" />
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
                        Elevate Your Software <br /> 
                        with <span>Kodeend IT Solutions</span>
                        </h1>
                        <p>
                        Unlock new opportunities and insights with our AI and data science-driven web solutions.
                        </p>
                        <a href="" className="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="img-box">
                        <img src="/assets/images/slider-img3.png" alt="" />
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
                  <Image src="/assets/images/computer-vision1.png" width={100} height={80} className="img1" alt="" />
                  <Image src="/assets/images/computer-vision1.png" className="img2" width={100} height={80} alt="" />
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
                <Link href="services/computervision"> Read More </Link>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                  <Image src="/assets/images/artificial-intelligence.png" className="img1" width={100} height={80} alt="" />
                  <Image src="/assets/images/artificial-intelligence.png" className="img2" width={100} height={80} alt="" />
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
                  <Image src="/assets/images/nlp.png" className="img1" width={100} height={80} alt="" />
                  <Image src="/assets/images/nlp.png" className="img2" width={100} height={80} alt="" />
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
            <Link href="/services"> Read More </Link>
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
                <Image src="/assets/images/about-img.jpg" width={500} height={400} alt="about Us Image" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p className="justify_content">
                At Kodeend IT Solutions, we specialize in utilizing cutting-edge technologies such as computer vision, artificial intelligence, and web development to provide innovative solutions for our clients. Our team of experts are dedicated to delivering high-quality services that help companies optimize their operations and drive growth. Whether {`you're`} looking to streamline processes, improve customer engagement, or gain valuable insights, we have the expertise and experience to help you achieve your goals. Contact us today to learn more about how we can help you take your business to the next level.
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
            <h2>Contact Us</h2>
          </div>
          <div className="">
            <div className="">
              <div className="row">
                <div className="col-md-9 mx-auto">
                  <div className="contact-form">
                    <form name="submit-to-google-sheet">
                      <div>
                        <input type="text" name="name" placeholder="Full Name " />
                      </div>
                      <div>
                        <input type="number" name="phone" placeholder="Phone Number" />
                      </div>
                      <div>
                        <input type="email" name="email" placeholder="Email Address" />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="message"
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
      
      {/* form data validation script */}
      
      {/* bootstrap scripts */}
      <Script
        type="text/javascript"
        src="/assets/js/jquery-3.4.1.min.js"
      />
      <Script type="text/javascript" src="/assets/js/bootstrap.js" />
    </>
  );
};

export default Home;
