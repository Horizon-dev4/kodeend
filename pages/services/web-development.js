import Image from "next/image";
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

            <div className="row" style={{'marginTop' : '80px'}}>
              <div className="col-md-6">
                <p className="text-start" style={{ paddingTop: "90px" }}>
                  For creating appealing and user-friendly websites, Kodeend IT
                  Solutions provides the best full-stack web development
                  services. Our all-encompassing strategy guarantees a smooth
                  user experience and outstanding performance. Count on us to
                  make your online presence functional.
                </p>
              </div>
              <div className="col-md-6">
                <Image
                  src="/assets/images/web-development.jpg"
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
                    src="/assets/images/web-development.jpg"
                    class="card-img-top"
                    width={400}
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
                    src="/assets/images/web-development.jpg"
                    class="card-img-top"
                    width={400}
                    height={220}
                    alt="Front-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Front-End Development</h5>
                    <p class="card-text">
                      HTML, CSS, JavaScript, and frameworks such as React and
                      Vue are used in responsive web development.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/web-development.jpg"
                    class="card-img-top"
                    width={400}
                    height={220}
                    alt="Back-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Back-End Development</h5>
                    <p class="card-text">
                      Server-side programming that is robust, utilizing
                      technologies such as Node.js, Python, and PHP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/web-development.jpg"
                    class="card-img-top"
                    width={400}
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
                    src="/assets/images/web-development.jpg"
                    class="card-img-top"
                    width={400}
                    height={220}
                    alt="Front-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Front-End Development</h5>
                    <p class="card-text">
                      HTML, CSS, JavaScript, and frameworks such as React and
                      Vue are used in responsive web development.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card h-100">
                  <Image
                    src="/assets/images/web-development.jpg"
                    class="card-img-top"
                    width={400}
                    height={220}
                    alt="Back-End Development"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Back-End Development</h5>
                    <p class="card-text">
                      Server-side programming that is robust, utilizing
                      technologies such as Node.js, Python, and PHP.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* feature section ends */}

          {/* get a quote section starts */}
          <div className="layout_padding-top">
            <div className="service_heading" style={{'paddingBottom':'0px!important'}}>
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
            
            <div className="ml-4">
              <ol>
                <li>Solutions that are adapted to your specific requirements.</li>
                <li>Knowledge of numerous web technologies.</li>
                <li>Mobile-responsive designs ensure a consistent user experience.</li>
                <li>On-time delivery combined with a methodical approach to project management.</li>
                <li>Affordable without reducing the quality.</li>
              </ol>
            </div>
          </div>
          {/* why our services ends */}

        </section>
        {/* end service section */}
        <Footer />
      </div>
    </>
  );
};

export default WebDevelopment;
