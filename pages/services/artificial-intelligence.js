import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const ArtificialIntelligence = () => {
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
              <h2>Artificial Intelligence</h2>
            </div>
            <div className="each_service">
              <Image src="/assets/images/artificial-intelligence.jpg" className="img-fluid" width={700} height={500} alt="computer vision service"/>
              <div className="each_service_content">
                <p>
                  Artificial Intelligence (AI) is a rapidly growing technology that is being used in a wide range of industries and applications. Also known as Machine Intelligence, AI is used to analyze and understand complex data, make predictions and automate processes.
                  <br /><br />
                  AI is being used in sports performance analysis, agriculture, business, data-driven ad solutions, demand forecasting and sales prediction, customer experience, supply chain and customer services, predictive analysis, risk management, real-time operations management, fraud detection, knowledge creation, and all kinds of research and development. It is also being used in chatbots, virtual assistants, and other conversational AI applications.
                  <br /><br />
                  One of the most popular and widely used forms of AI is <Link href="https://www.ibm.com/topics/machine-learning" target="_blank">Machine Learning</Link> (ML) which is a subset of AI that enables computers to learn from data, without being explicitly programmed. Another popular technology is Deep Learning (DL) which is a type of machine learning that uses multi-layer neural networks to analyze large amounts of data.
                  <br /><br />
                  AI is becoming an integral part of our daily lives, from smartphones to self-driving cars, from healthcare to finance, and from entertainment to education. With the help of AI, companies can make better decisions, improve efficiency and boost productivity, and ultimately, create new revenue streams and business models.

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

export default ArtificialIntelligence;
