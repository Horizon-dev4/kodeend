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
              <h2>Our Blogs</h2>
            </div>

            <div className="service_container">
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/AI-2.jpeg" width={200} height={80} className="img1" alt="" />
                  <Image src="/assets/images/AI-2.jpeg" className="img2" width={200} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>AI and Machine Learning Are the Future</h5>
                  <p>
                  We live in a technological age where innovation and development are the norm.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/blogs/ai-and-machinelearning-are-the-future"> Read More </Link>
                </div>
              </div>

              {/* box-2 */}
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/blog2_1.jpg" width={200} height={80} className="img1" alt="" />
                  <Image src="/assets/images/blog2_1.jpg" className="img2" width={200} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Boost Productivity with ERP Softwares</h5>
                  <p>
                  An ERP {`systems's`} primary goal is to manage and automate a {`business's`} daily activities.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/blogs/what-is-erp"> Read More </Link>
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
