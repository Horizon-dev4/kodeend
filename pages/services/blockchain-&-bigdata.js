import Image from "next/image";
import Script from "next/script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import QuoteForm from "../../components/QuoteForm";

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
        <section className="layout_padding container">
          <div>
            <div className="heading_container">
              <h2>
                Accelerate growth and innovation with {`Kodeend's`} Blockchain and Big Data expertise
              </h2>
            </div>

            <div className="row" >
              <div className="col-md-6 srvc_hero_align">
                <p className="text-start">
                  Kodeend uses blockchain technology to assist your company in implementing decentralized solutions that decrease costs, enhance efficiency, and boost trust between partners. Apart from blockchain, {`Kodeend's`} big data may assist your company in analyzing vast volumes of data in order to unearth useful insights and make educated choices.
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/assets/images/service4_1.jpg"
                  className="img-fluid"
                  width={700}
                  height={600}
                  alt="Blockchain and Big Data"
                />
              </div>
            </div>
          </div>

          {/* feature section starts */}
          <div className="layout_padding-top">
            <div className="service_heading">
              <h2>The features we provide</h2>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_2.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Custom Blockchain Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Custom Blockchain Development</h5>
                    <p class="card-text">
                      Kodeend IT Solutions can help organizations in developing custom blockchain solutions that are suited to their specific requirements, such as public, private, and consortium blockchains.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_3.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Blockchain Consulting"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Blockchain Consulting</h5>
                    <p class="card-text">
                      {`Kodeend's`} skilled team can assist firms to comprehend the potential of blockchain and create use cases for its adoption.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_4.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Smart Contract Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Smart Contract Development</h5>
                    <p class="card-text">
                      {`Kodeend's`} skilled team can assist firms to comprehend the potential of blockchain and create use cases for its adoption.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Second row of features */}
          <div className="mt-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_5.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Big Data Analytics"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Big Data Analytics</h5>
                    <p class="card-text">
                      Using modern analytics tools and techniques like machine learning and predictive analytics, KodeEnd can assist firms in analyzing enormous amounts of data.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_6.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Data Visualization"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Data Visualization</h5>
                    <p class="card-text">
                      Kodeend can assist organizations in making sense of their data by developing interactive dashboards and visualizations that facilitate data exploration and analysis.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_7.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Data Security"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Data Security</h5>
                    <p class="card-text">
                      By adopting best practices for data protection, such as encryption and access restrictions, KodeEnd can assist organizations in ensuring the security and privacy of their data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Third row of features */}
          <div className="mt-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_8.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Data Governance"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Data Governance</h5>
                    <p class="card-text">
                      Kodeend may assist enterprises in developing data management rules and processes, such as data quality, metadata management, and compliance.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service4_9.png"
                    class="card-img-top"
                    width={400}
                    height={220}
                    alt="Cloud-based Services"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Cloud-based Services</h5>
                    <p class="card-text">
                      Kodeend can provide cloud-based solutions that allow organizations to access their data and blockchain technologies from anywhere, at any time.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_10.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Back-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Website Maintenance, Support & Security</h5>
                    <p class="card-text">
                      Regular website maintenance, technical support, and security upgrades to ensure peak website performance and security.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* feature section ends */}

          {/* get a quote section starts */}
          <div className="layout_padding-top">
            <div className="request_service_heading">
              <h2>Request a Quote</h2>
            </div>
          </div>

          <QuoteForm />
          {/* get a quote section ends */}

          {/* why our services starts */}
          <div className="layout_padding-top">
            <div className="service_heading">
              <h2>Why Choose Our Blockchain & Big Data Services</h2>
            </div>
            
            <div className="why_us">
              <p>
                <i class="fa-solid fa-check"></i>Our team of professionals has years of experience and can give organizations the implementation knowledge they require..<br/>
                <i class="fa-solid fa-check"></i>Kodeend can provide personalized blockchain and big data solutions for organizations based on their specific needs.<br/>
                <i class="fa-solid fa-check"></i>Our products are built with security in mind, giving businesses peace of mind that their data is safe from cyber-attacks and illegal access.<br/>
                <i class="fa-solid fa-check"></i>{`KodeEnd's`} solutions are scalable, which means they can expand alongside a company to meet rising data volumes and user numbers.<br/>
                <i class="fa-solid fa-check"></i>Our solutions are budget-friendly, allowing organizations to reap the benefits of blockchain and big data without breaking the bank
              </p>
            </div>
          </div>
          {/* why our services ends */}

        </section>
        {/* end service section */}
        <Footer />

        <Script src="https://kit.fontawesome.com/8976912a92.js" crossorigin="anonymous"></Script>
      </div>
    </>
  );
};

export default WebDevelopment;
