import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const computervision = () => {
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
              <h2>Computer Vision</h2>
            </div>
            <div className="each_service">
              <Image src="/assets/images/computer-vision.jpg" className="img-fluid" width={700} height={600} alt="computer vision service"/>

              <div className="each_service_content">
                <p>
                  Computer vision is a field of Artificial Intelligence (Ai) that
                  unlock insights from digital images, videos and other visual
                  inputs. AI driven computer vision to detach &amp; classify
                  objects in images &amp; videos. Human sight has the advantage of
                  lifetimes of context to train how to tell objects apart, how far
                  away they are, whether they are moving and whether there is
                  something wrong in an image. Computer vision see and understand
                  the world through the eyes of machine. For that reason, Computer
                  vision need lots of data. <br/><br/> Deep learning (DL) &amp; a
                  Convolutional Neural Network (CNN) these two essential
                  technologies are used to analysis and unlock the power of Ai
                  vision for your business. AI powered computer vision create
                  perfect image with no manual effort, and by ML (Machine
                  Learning) uses algorithmic models that enable the ai powered
                  computer to teach itself about the context of visual data.
                </p>
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

export default computervision;
