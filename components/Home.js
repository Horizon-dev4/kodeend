import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import Header from "./Header";
import Meta from "./Meta";

const Home = () => {
  
  return (
    <>
      <Meta />

      <div className="hero_area">
        {/* header section strats */}
        <div className="header_home">
          <Header />
        </div>
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
                        with <span>kodeEnd IT Solutions</span>
                        </h1>
                        <p>
                        Optimize your operations and decision making with our AI and data science services
                        </p>
                        <Link href="/about" className="">
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="img-box">
                        <img src="/assets/images/slider-img.png" alt="" />
                        {/* <Image src="/assets/images/slider-img.png" alt="slider-img1" width={410} height={422} /> */}
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
                        <span>kodeEnd IT </span>is your Intelligence solutions
                         {/* <br /> 
                        with <span>kodeEnd IT Solutions</span> */}
                        </h1>
                        <p>
                        Unlock the full potential of your business with our web-apps, AI and data science expertise.
                        </p>
                        <Link href="/about" className="">
                          Read More
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-5 offset-md-1">
                      <div className="img-box">
                        <img src="/assets/images/slider-img2.png" alt="" />
                        {/* <Image src="/assets/images/slider-img2.png" alt="slider-img1" width={458} height={471} /> */}
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
                        Empower your business <br /> 
                        with <span>kodeEnd IT Solutions</span>
                        </h1>
                        <p>
                        Unlock new opportunities and insights with our AI and data science-driven web solutions.
                        </p>
                        <Link href="/about" className="">
                          Read More
                        </Link>
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

            {/* <div className="box">
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
                <Link href="/services/artificial-intelligence"> Read More </Link>
              </div>
            </div> */}

            <div className="box">
              <div className="img-box">
                  <Image src="/assets/images/web.png" className="img1" width={100} height={80} alt="" />
                  <Image src="/assets/images/web.png" className="img2" width={100} height={80} alt="" />
              </div>
              <div className="detail-box">
                <h5>Web Development</h5>
                <p>
                  Full-stack web development is offered by Kodeend IT for user-friendly websites with a seamless experience and exceptional performance.
                </p>
              </div>
              <div className="btn-box2">
                <Link href="/services/web-development"> Learn More </Link>
              </div>
            </div>

            {/* Service Two */}
            <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/artificial-intelligence.png" className="img1" width={100} height={80} alt="" />
                  <Image src="/assets/images/artificial-intelligence.png" className="img2" width={100} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>AI & ML</h5>
                  <p>
                    To help businesses remain competitive, Kodeend IT Solutions provides AI services including machine learning and computer vision. 
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/services/artificial-intelligence"> Learn More </Link>
                </div>
              </div>

            <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/nlp.png" className="img1" width={100} height={80} alt="" />
                  <Image src="/assets/images/nlp.png" className="img2" width={100} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Natural Language Processing</h5>
                  <p>
                    Kodeend IT Solutions provides  NLP techniques for better customer service, data input automation, and meaningful customer feedback analysis. Get professional assistance right away. 
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/services/natural-language-processing"> Learn More </Link>
                </div>
              </div>
          </div>
          <div className="btn-box">
            <Link href="/services"> More Services </Link>
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
                <Image src="/assets/images/about-img1.png" width={500} height={400} alt="about Us Image" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>About Us</h2>
                </div>
                <p className="">
                At kodeEnd IT Solutions, we specialize in utilizing cutting-edge technologies such as computer vision, artificial intelligence, and web development to provide innovative solutions for our clients. Our team of experts are dedicated to delivering high-quality services that help companies optimize their operations and drive growth. Whether {`you're`} looking to streamline processes, improve customer engagement, or gain valuable insights, we have the expertise and experience to help you achieve your goals. Contact us today to learn more about how we can help you take your business to the next level.
                </p>
                <Link href="/about"> Read More </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}

      {/* portfolio section */}
        {/* <section className="portfolio_section layout_padding">
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
        </section> */}
      {/* end portfolio section */}

      {/* contact section */}
        <ContactForm />
      {/* end contact section */}
      
      <Footer />
    </>
  );
};

export default Home;
