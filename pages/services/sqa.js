import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Meta from '../../components/Meta';
import QuoteForm from '../../components/QuoteForm';

const SQA = () => {
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
                SQA Services of the Highest Quality for Outstanding Software Products
              </h2>
            </div>

            <div className="row" >
              <div className="col-md-6 srvc_hero_align">
                <p className="text-start">
                    Software quality assurance (SQA) is an important stage in the development of software that makes sure that software applications adhere to the intended standards and specifications for quality. For companies aiming to improve the caliber and dependability of their software products, Kodeend IT Solutions is the best option to go with.
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/assets/images/service7_1.jpg"
                  className="img-fluid"
                  width={700}
                  height={600}
                  alt="Software quality assurance"
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
                    src="/assets/images/service7_2.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Comprehensive Testing"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Comprehensive Testing</h5>
                    <p class="card-text">
                        Our skilled team of professionals thoroughly tests software products to make sure they are free of mistakes, defects, and glitches.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service7_3.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Test Automation"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Test Automation</h5>
                    <p class="card-text">
                        Modern automation tools are used to improve {`testing's`} effectiveness and efficiency.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service7_4.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Performance Testing"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Performance Testing</h5>
                    <p class="card-text">
                        To ensure that software solutions operate as effectively as possible under conditions of high traffic and load, our experts conduct rigorous performance testing.
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
                    src="/assets/images/service7_5.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Security Testing"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Security Testing</h5>
                    <p class="card-text">
                        Additionally, we carry out extensive security testing to find and fix any flaws that can endanger the software or the user.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service7_6.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Continuous Integration"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Continuous Integration</h5>
                    <p class="card-text">
                        To ensure that quality is maintained throughout the development lifecycle, our SQA services are incorporated into the software development process.
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
              <h2>Why Choose Our SQA Services</h2>
            </div>
            
            <div className="why_us">
              <p>
                <i class="fa-solid fa-check"></i>Our SQA services assist companies in enhancing the quality and dependability of their software products.<br/>
                <i class="fa-solid fa-check"></i>We assist companies in reducing time-to-market by spotting and fixing problems early in the development process.<br/>
                <i class="fa-solid fa-check"></i>By identifying flaws and problems early in the development process, our SQA services save companies cash.<br/>
                <i class="fa-solid fa-check"></i>Our thorough security testing aids companies in locating weaknesses and resolving them.<br/>
                <i class="fa-solid fa-check"></i>We offer top-notch services to companies of all sizes and types.
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
  )
}

export default SQA;
