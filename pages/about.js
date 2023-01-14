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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                  </p>
                  <a href="">Read More</a>
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
