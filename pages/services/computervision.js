import Image from "next/image";
import Link from "next/link";
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
                Computer vision is a field of <Link href="/services/artificial-intelligence">Artificial Intelligence</Link> (Ai) that unlock insights from digital images, videos and other visual inputs. AI driven computer vision to detach & classify objects in images & videos. Human sight has the advantage of lifetimes of context to train how to tell objects apart, how far away they are, whether they are moving and whether there is something wrong in an image.
                <br /><br />
                Computer vision see and understand the world through the eyes of machine. For that reason, Computer vision need lots of data. <Link href="https://www.ibm.com/topics/deep-learning" target="_blank">Deep learning</Link>  (DL) & a Convolutional Neural Network (CNN) these two essential technologies are used to analysis and unlock the power of Ai vision for your business.
                <br /><br />
                AI powered computer vision create perfect image with no manual effort, and by ML (Machine Learning) uses algorithmic models that enable the ai powered computer to teach itself about the context of visual data. 
                <br /><br />
                Overall, AI-powered computer vision is a powerful tool for businesses, allowing them to analyze and understand visual data with minimal manual effort. By leveraging deep learning and CNN, computer vision can create perfect images and unlock insights that would otherwise be impossible to achieve. With the emergence of new technologies like ResNet, OpenAI, Dalle 2 and Stable Defusion, computer vision is becoming more powerful and efficient than ever before.

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
