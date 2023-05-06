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
                  <Link href="/services/computervision"> Read More </Link>
                </div>
              </div> */}
              
              {/* <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/artificial-intelligence.png" className="img1" width={100} height={80} alt="" />
                  <Image src="/assets/images/artificial-intelligence.png" className="img2" width={100} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Artificial Intelligence (AI)</h5>
                  <p>
                    Artificial Intelligence is vastly using now a days.
                    Artificial Intelligence also known as rMachine Intelligence.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/services/artificial-intelligence"> Read More </Link>
                </div>
              </div> */}

              {/* Service One */}
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/web.png" className="img1" width={75} height={70} alt="web development" />
                  <Image src="/assets/images/web.png" className="img2" width={75} height={70} alt="web development" />
                </div>
                <div className="detail-box">
                  <h5 style={{'margin-top':'30px'}}>Web Development</h5>
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

              {/* <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/blockchain.png" className="img1" width={75} height={76} alt="" />
                  <Image src="/assets/images/blockchain.png" className="img2" width={75} height={76} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Block chain & Big Data</h5>
                  <p>
                  Blockchain and big data are two new technologies that are high on {`companies'`} priority lists.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/services/blockchain-&-bigdata"> Read More </Link>
                </div>
              </div>

              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/erp.png" className="img1" width={75} height={66} alt="" />
                  <Image src="/assets/images/erp2.png" className="img2" width={75} height={66} alt="" />
                </div>
                <div className="detail-box">
                  <h5>ERP</h5>
                  <p>
                  While there {`isn't`} a one-size-fits-all software solution for every corporate function, ERP technology is improving at connecting processes together. 
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/services/erp"> Read More </Link>
                </div>
              </div> */}

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
