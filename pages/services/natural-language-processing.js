import Image from "next/image";
import Script from "next/script";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";
import QuoteForm from "../../components/QuoteForm";

const NaturalLanguageProcessing = () => {
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
                Adopt the Natural Language Processing techniques from Kodeend IT Solutions
              </h2>
            </div>

            <div className="row" >
              <div className="col-md-6 srvc_hero_align">
                <p className="text-start">
                  Natural Language Processing (NLP) services can assist your businesses in understanding the full value of linguistic data. Our NLP solutions analyze and interpret human language in all its complexities using modern algorithms and machine learning approaches, allowing you to extract useful insights from text data and automate a range of language-based processes.
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/assets/images/service1_1.jpg"
                  className="img-fluid"
                  width={700}
                  height={600}
                  alt="web development"
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
                    src="/assets/images/service1_2.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="UI/UX Design"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Entity recognition</h5>
                    <p class="card-text">
                      Unstructured text sources can be identified and relevant information extracted. Improve search accuracy and data processing efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_3.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Front-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Language translation</h5>
                    <p class="card-text">
                      Text will be translated from one language to another. Enhance global communication with customers and partners.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_4.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Back-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Sentiment analysis</h5>
                    <p class="card-text">
                      Determine sentiment by analyzing customer responses and internet reviews. Customer service and reputation management will be improved.
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
                    src="/assets/images/service1_5.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="UI/UX Design"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Text classification</h5>
                    <p class="card-text">
                      Text can be classified according to its topic, content type, or language. Automate data input and content management.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_6.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Front-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Voice recognition</h5>
                    <p class="card-text">
                      Recognize and transcribe spoken language. Improve accessibility by automating voice-based consumer interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service1_7.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Back-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Data mining</h5>
                    <p class="card-text">
                      Utilize unstructured data sources for trends, patterns, and insights. Get a competitive edge by informing business choices.
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
                    src="/assets/images/service1_8.jpg"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="UI/UX Design"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Chatbot development</h5>
                    <p class="card-text">
                      Create personalized chatbots that can comprehend and respond to client inquiries. Customer service and assistance must be automated.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div class="col">
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
              <h2>Why Choose Our NLP Services</h2>
            </div>
            
            <div className="why_us">
              <p>
                <i class="fa-solid fa-check"></i>We employ NLP technology to automate time-consuming and laborious processes.<br/>
                <i class="fa-solid fa-check"></i>We can assist companies with extracting useful information from unstructured data sources such as consumer feedback and internet reviews.<br/>
                <i class="fa-solid fa-check"></i>Using NLP technology, our experts can extract insights and automate activities.<br/>
                <i class="fa-solid fa-check"></i>Our methodologies can manage vast amounts of data and automate repetitive operations
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

export default NaturalLanguageProcessing;
