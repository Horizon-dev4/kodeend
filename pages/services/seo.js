import Image from 'next/image';
import Script from 'next/script';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Meta from '../../components/Meta';
import QuoteForm from '../../components/QuoteForm';

const SEO = () => {
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
                Enhance Your Online Visibility with Professional SEO Services
              </h2>
            </div>

            <div className="row" >
              <div className="col-md-6 srvc_hero_align">
                <p className="text-start">
                  As part of our services, we can enhance a {`website's`} content, structure, and other elements to make them more appealing to search engines. The services are intended to help businesses optimize their search engine rankings, boost website traffic, and ultimately increase their online visibility and profitability.
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/assets/images/service6_1.jpg"
                  className="img-fluid"
                  width={700}
                  height={600}
                  alt="SEO Services"
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
                    src="/assets/images/service6_2.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Keyword Research"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Keyword Research</h5>
                    <p class="card-text">
                        To find the most beneficial and relevant terms for your company, we do a lot of research.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service6_3.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="On-page Optimization"
                  />
                  <div class="card-body">
                    <h5 class="card-title">On-page Optimization</h5>
                    <p class="card-text">
                        In order to improve your {`website's`} search engine ranks, our professionals optimize its content, meta tags, and other on-page components.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service6_4.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Off-page Optimization"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Off-page Optimization</h5>
                    <p class="card-text">
                        We put a lot of effort into creating solid backlinks and increasing the domain authority of your website through efficient off-page optimization.
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
                    src="/assets/images/service6_5.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Analytics and Reporting"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Analytics and Reporting</h5>
                    <p class="card-text">
                        Our team keeps an eye on the functioning of your website and gives thorough information on its traffic and search engine rankings.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/service6_6.png"
                    class="card-img-top"
                    width={200}
                    height={220}
                    alt="Local SEO"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Local SEO</h5>
                    <p class="card-text">
                        By optimizing your website for location-based keywords and Google My Business listings, we can help your business attract local clients.
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
              <h2>Why Choose Our SEO Services</h2>
            </div>
            
            <div className="why_us">
              <p>
                <i class="fa-solid fa-check"></i>With years of experience, our SEO professionals can create solutions that are results-driven and specifically suited to your {`company's`} demands.<br/>
                <i class="fa-solid fa-check"></i>We have a proven track record of raising the search engine ranks of our {`clients'`} websites and increasing organic traffic to those sites.<br/>
                <i class="fa-solid fa-check"></i>We are aware that every company has different SEO needs, and we provide solutions that are specifically customized for your needs.<br/>
                <i class="fa-solid fa-check"></i>With our budget-friendly SEO services, you may receive excellent results without going overboard.<br/>
                <i class="fa-solid fa-check"></i>We work closely with our clients to ensure that their SEO objectives are met since we are dedicated to giving them the best possible customer service and satisfaction.
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
}

export default SEO;
