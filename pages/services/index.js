import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const index = () => {
  return (
    <>
      <Meta />
      <div className="sub_page">
        <div className="hero_area">
          {/* header section strats */}
          <Header />
          {/* end header section */}
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
                  <Link href="/services/computervision"> Read More </Link>
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
                    Artificial Intelligence is vastly using now a days.
                    Artificial Intelligence also known as Machine Intelligence.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/services/artificial-intelligence"> Read More </Link>
                </div>
              </div>
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/s-2.png" className="img1" width={75} height={66} alt="" />
                  <Image src="/assets/images/s-2-color.png" className="img2" width={75} height={66} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Web Development</h5>
                  <p>
                    The term web development refers to the process of designing,
                    developing, and maintaining websites.
                  </p>
                </div>
                <div className="btn-box2">
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end service section */}

        <Footer />
      </div>
    </>
  );
};

export default index;
