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
                Eye-catchy, user-friendly websites with robust web development
                Services.
              </h2>
            </div>

            <div className="row" >
              <div className="col-md-6 srvc_hero_align">
                <p className="text-start">
                  For creating appealing and user-friendly websites, Kodeend IT
                  Solutions provides the best full-stack web development
                  services. Our all-encompassing strategy guarantees a smooth
                  user experience and outstanding performance. Count on us to
                  make your online presence functional.
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
                    <h5 class="card-title">UI/UX Design</h5>
                    <p class="card-text">
                      Web design that is engaging and user-centric in order to
                      provide the best user experience and functionality.
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
                    <h5 class="card-title">Front-End Development</h5>
                    <p class="card-text">
                      HTML, CSS, JavaScript, and frameworks such as React js and
                      Next js are used in responsive Front-End development.
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
                    <h5 class="card-title">Back-End Development</h5>
                    <p class="card-text">
                      Server-side programming that is robust, utilizing
                      technologies such as Node.js, Python, Django, PHP and Laravel.
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
                    <h5 class="card-title">Custom Website Design</h5>
                    <p class="card-text">
                      Customized website solutions for your business requirements and branding.
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
                    <h5 class="card-title">Content Management System (CMS)</h5>
                    <p class="card-text">
                      CMSs that are simple to use, like WordPress and Wix, providing an ideal one for managing website content.
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
                    <h5 class="card-title">E-commerce Integration</h5>
                    <p class="card-text">
                      E-commerce systems to make it easy for businesses to sell your products and services online.
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
              <h2>Why Choose Our Web Development Services</h2>
            </div>
            
            <div className="why_us">
              <p>
                <i class="fa-solid fa-check"></i>Solutions that are adapted to your specific requirements.<br/>
                <i class="fa-solid fa-check"></i>Knowledge of numerous web technologies.<br/>
                <i class="fa-solid fa-check"></i>Mobile-responsive designs ensure a consistent user experience.<br/>
                <i class="fa-solid fa-check"></i>On-time delivery combined with a methodical approach to project management.<br/>
                <i class="fa-solid fa-check"></i>Affordable without reducing the quality.
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
