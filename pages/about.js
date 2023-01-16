import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";

const about = () => {
  return (
    <>
      <Meta />
      <div className="sub_page">
        <div className="hero_area">
          {/* header section strats */}
          <Header />
          {/* end header section */}
        </div>
        {/* about section */}
        <section className="about_section layout_padding">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="img-box">
                  <Image
                    src="/assets/images/about-img.png"
                    width={548}
                    height={408}
                    alt="about Us Image"
                  />
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
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end about section */}

        <Footer />
      </div>
    </>
  );
};

export default about;
