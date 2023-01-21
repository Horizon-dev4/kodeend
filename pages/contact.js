import React from "react";
import ContactForm from "../components/ContactForm";
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
          <ContactForm />
        {/* end contact section */}

        <Footer />
      </div>
    </>
  );
};

export default contact;
