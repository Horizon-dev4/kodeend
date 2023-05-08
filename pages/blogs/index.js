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
              {/* blog-1 */}
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

              {/* blog-2 */}
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

              {/* blog-3 */}
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/blog3_1.jpg" width={200} height={80} className="img1" alt="" />
                  <Image src="/assets/images/blog3_1.jpg" className="img2" width={200} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Blockchain and Big Data</h5>
                  <p>
                  Blockchain and Big Data are two of the most needed technological developments in recent years.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/blogs/blockchain-and-bigdata"> Read More </Link>
                </div>
              </div>

              {/* blog-4 */}
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/blog4_0.jpg" width={200} height={80} className="img1" alt="" />
                  <Image src="/assets/images/blog4_0.jpg" className="img2" width={200} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>Computer Vision</h5>
                  <p>
                    Computer vision is a field of artificial intelligence that trains computers to interpret and understand the visual world.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/blogs/computer-vision"> Read More </Link>
                </div>
              </div>

              {/* blog-5 */}
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/blog5_1.webp" width={200} height={80} className="img1" alt="" />
                  <Image src="/assets/images/blog5_1.webp" className="img2" width={200} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>SQA</h5>
                  <p>
                    Software quality assurance (SQA) is a process that ensures that developed software meets and complies with defined or standardized quality specifications.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/blogs/sqa"> Read More </Link>
                </div>
              </div>

              {/* blog-6 */}
              <div className="box">
                <div className="img-box">
                  <Image src="/assets/images/blog6_0.webp" width={200} height={80} className="img1" alt="" />
                  <Image src="/assets/images/blog6_0.webp" className="img2" width={200} height={80} alt="" />
                </div>
                <div className="detail-box">
                  <h5>GPT fine-tuning</h5>
                  <p>
                    GPT-3 is a language model that uses deep learning to produce human-like text.
                  </p>
                </div>
                <div className="btn-box2">
                  <Link href="/blogs/gpt-fine-tuning"> Read More </Link>
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
