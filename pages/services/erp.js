import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const ERP = () => {
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
              <h2>Block chain & Big Data</h2>
            </div>
            <div className="each_service">
              <Image
                src="/assets/images/erp.jpg"
                className="img-fluid"
                width={700}
                height={600}
                alt="computer vision service"
              />

              <div className="each_service_content">
                <p>
                ERP is the abbreviation for enterprise resource planning. {`It's`} software that keeps track of a {`company's`} finances, supply chain, operations, commerce, reporting, manufacturing, and human resources. It is the coordinated administration of key business operations, which is often done in real time and mediated by software and technology. Most businesses have a financial and operational system in place, but most other software {`can't`} help with future business growth or go beyond ordinary business activities. Companies should be able to scale up as their needs change, and their systems should be able to keep up with them. {`We'll`} describe ERP and why {`it's`} important to have software that can keep up with your changing business needs.
                <br /><br />
                While there {`isn't`} a one-size-fits-all software solution for every corporate function, ERP technology is improving at connecting processes together. {`You'll`} have the intelligence, acceleration, and agility you need to start optimizing your operations once your processes, systems, and data are connected.
                <br /><br />
                {`Here's`} three ways ERP can improve your business:
                </p>
                <ul>
                    <li>
                        Assist in achieving peak performance. Artificial intelligence (AI) solutions give you access to insights that help you make better decisions and identify methods to improve operational performance in the future.
                    </li>
                    <li>
                        Increase the speed with which your operational influence is felt. By integrating processes and data, you may provide employees more visibility and freedom, allowing them to act more swiftly and generate more value across the organization.
                    </li>
                    <li>
                        Ensure that your company is flexible. Many ERP solutions are designed to adapt to your needs and evolve with you, allowing you to plan ahead of time for any operational disruption or market change and respond quickly.
                    </li>
                </ul>
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

export default ERP;
