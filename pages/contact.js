import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";

const contact = () => {
  return (
    <>
      <Meta />
      <div className="sub_page">
        <div className="hero_area">
          {/* header section strats */}
          <Header />
          {/* end header section */}
        </div>
        {/* contact section */}
        <section className="contact_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>contact us</h2>
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
      </div>
    </>
  );
};

export default contact;
