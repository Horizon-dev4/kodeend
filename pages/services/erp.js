import Image from "next/image";
import Script from "next/script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import QuoteForm from "../../components/QuoteForm";

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
        <section className="layout_padding container">
          <div>
            <div className="heading_container">
              <h2>
                Enhance the Effectiveness of Your Business with {`Kodeend's`} Expert ERP Solutions
              </h2>
            </div>

            <div className="row" >
              <div className="col-md-6 srvc_hero_align">
                <p className="text-start">
                  An outstanding ERP (Enterprise Resource Planning) solution provider, Kodeend IT Solutions is committed to assisting companies of all sizes in streamlining their operations and boosting production. With our modern ERP solutions, any business can easily accomplish its strategic goals.
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/assets/images/service5_1.jpg"
                  className="img-fluid"
                  width={700}
                  height={600}
                  alt="ERP Solutions"
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
                    src="/assets/images/service5_2.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Customizable ERP"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Customizable ERP</h5>
                    <p class="card-text">
                      We provide specialized ERP solutions to meet the particular demands and needs of each client, assuring optimum productivity and efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service5_3.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Expert Consultation"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Expert Consultation</h5>
                    <p class="card-text">
                      In order to ensure a seamless transition, our team of ERP professionals offers thorough advice and support services during the implementation process and beyond.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service5_4.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Cloud-based Solutions"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Cloud-based Solutions</h5>
                    <p class="card-text">
                      Our cloud-based ERP systems give organizations the flexibility and scalability to access their data and apps from any location, at any time, and on any device.
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
                    src="/assets/images/service5_5.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Integration with Third-Party Applications"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Integration with Third-Party Applications</h5>
                    <p class="card-text">
                      To improve overall business performance, we effortlessly combine our ERP solutions with other business applications like CRM, HRM, and SCM systems.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service5_6.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Advanced Analytics and Reporting"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Advanced Analytics and Reporting</h5>
                    <p class="card-text">
                      With the help of the sophisticated analytics and reporting tools included in our ERP solutions, organizations can acquire a comprehensive understanding of their operations, make data-driven choices, and boost their bottom line.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_7.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Back-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">E-commerce Integration</h5>
                    <p class="card-text">
                      E-commerce systems to make it easy for businesses to sell your products and services online.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Third row of features */}
          {/* <div className="mt-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_8.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="UI/UX Design"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Content & SEO</h5>
                    <p class="card-text">
                      SEO optimization and high-quality content production for website visibility and search engine ranking.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_9.jpg"
                    class="card-img-top"
                    width={400}
                    height={220}
                    alt="Front-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Graphics</h5>
                    <p class="card-text">
                      Graphics and images that are customized to improve website design and user engagement.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
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
              </div>
            </div>
          </div> */}
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
              <h2>Why Choose Our ERP Solutions</h2>
            </div>
            
            <div className="why_us">
              <p>
                <i class="fa-solid fa-check"></i>Our ERP solutions boost productivity and efficiency by automating and reducing manual errors.<br/>
                <i class="fa-solid fa-check"></i>Teams can work together efficiently and communicate without interruption, which promotes better decision-making.<br/>
                <i class="fa-solid fa-check"></i>Our ERP systems enable businesses to maximize resource allocation and utilization.<br/>
                <i class="fa-solid fa-check"></i>Enhance response times, accuracy, and general customer experience.<br/>
                <i class="fa-solid fa-check"></i>Our ERP solutions lower operating costs, yielding over time considerable cost savings.
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

export default ERP;
