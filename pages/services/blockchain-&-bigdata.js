import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

const WebDevelopment = () => {
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
                src="/assets/images/blockchain-bigdata.jpg"
                className="img-fluid"
                width={700}
                height={600}
                alt="computer vision service"
              />

              <div className="each_service_content">
                <p>
                Big Data has been around for a long, and blockchain technology is currently riding the crest of a wave of popularity. Big Data and blockchain are a combination made in heaven. The real question now is who will be the first to create the most appropriate and well-trained AI/machine learning model for use on top of blockchain-generated data layers that are distributed, transparent, and immutable. The company who does this will bring in a lot of money and make a lot of money.
                  <br /><br />
                  Blockchain and big data are two new technologies that are high on {`companies'`} priority lists. These are expected to have a substantial impact on how the business and the firm operate. These are on the verge of raising expectations for distributed ledgers, which would keep businesses from encountering difficulties. The notions of big data and blockchain have been supplanted by a slew of alternative ideas for securing and interpreting data. These {`technologies'`} perfect solutions will handle the issues of large data management as well as analytics. Furthermore, Blockchain has its own consensus technique, which is the key means of establishing an audit trail. This allows users to double-check their information. Regardless of who owns the asset, the audit trail is a way of validating the correctness and integrity of every transaction. The Blockchain may also verify that all participants to a transaction are adhering to the terms of the agreement and are not breaching it.
                  <br /><br />
                  The aggregate value of the {`world's`} 50 largest mineral mining businesses is around $700 billion. The value of blockchain-based big data mining systems will likely be in the trillions of dollars. Without the risks associated with a network of different data silos, a blockchain-based Big Data solution would allow providers to share records with any other sector with an interest.
                  <br /><br />
                  The addition of blockchain to the Big Data analytics process adds another data layer. Most notably, this data layer satisfies two major Big Data analysis requirements:
                </p>
                <ul>
                    <li>Blockchain-generated Big Data is safe because the network architecture prevents forgery.</li>
                    <li>Big Data on the blockchain is valuable because it is structured, abundant, and complete, making it an ideal source for future investigations.</li>
                </ul>
                <p>
                The {`ledger's`} data can be related to energy trade, real estate, and a variety of other fields. This fact has resulted in a slew of Big Data analytics enhancements. For example, fraud protection is possible thanks to blockchain technology, which allows financial institutions to monitor every transaction in real time. As a result, rather than reviewing the records of previous frauds, banks are now able to identify dangerous or fraudulent transactions on the fly, preventing fraud entirely.
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

export default WebDevelopment;
