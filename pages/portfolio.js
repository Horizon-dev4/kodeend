import Footer from "../components/Footer";
import Header from "../components/Header";
import Meta from "../components/Meta";

const portfolio = () => {
  return (
    <>
      <Meta />
      <div className="sub_page">
        <div className="hero_area">
          {/* header section strats */}
          <Header />
          {/* end header section */}
        </div>
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
                    <img src="assets/images/p-1.jpg" alt="" />
                    <a href="">
                      <img src="assets/images/link.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/p-2.jpg" alt="" />
                    <a href="">
                      <img src="assets/images/link.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/p-3.jpg" alt="" />
                    <a href="">
                      <img src="assets/images/link.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/p-4.jpg" alt="" />
                    <a href="">
                      <img src="assets/images/link.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/p-5.jpg" alt="" />
                    <a href="">
                      <img src="assets/images/link.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-sm-6">
                  <div className="img-box">
                    <img src="assets/images/p-6.jpg" alt="" />
                    <a href="">
                      <img src="assets/images/link.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-box">
              <a href="">View More</a>
            </div>
          </div>
        </section>
        {/* end portfolio section */}
        <Footer />
      </div>
    </>
  );
};

export default portfolio;
