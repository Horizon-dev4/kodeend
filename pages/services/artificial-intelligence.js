import Image from "next/image";
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
              <p>
              Artificial Intelligence is vastly using now a days. Artificial Intelligence also known as Machine Intelligence. <br /><br />
              Sports performance analysis, agriculture, business, Data driven ad solution, Demand forecasting and sales prediction, customer experience, supply chain & customer services, predictive analysis, Risk management & analysis, real time operations management, Fraud detection, knowledge creation, all kind of research & development, chat bots, etc. It can be uses from War to Agriculture, Shop to Kitchen, Education to Job, Sports to Hospital, everywhere in our daily life.

              </p>
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
