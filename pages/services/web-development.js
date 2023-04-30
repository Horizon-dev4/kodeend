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
        <section className=" layout_padding">
          <div className="container">
            <div className="heading_container mb-4">
              <h2>Eye-catchy, user-friendly websites with robust web development Services.</h2>
            </div>

            <div className="row">
              <div className="col-md-6">
                <p className="text-start" style={{'paddingTop' : '90px'}}>
                  For creating appealing and user-friendly websites, Kodeend IT Solutions provides the best full-stack web development services. Our all-encompassing strategy guarantees a smooth user experience and outstanding performance. Count on us to make your online presence functional.
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

            {/* <div className="each_service">
              <Image
                src="/assets/images/web-development.jpg"
                className="img-fluid"
                width={700}
                height={600}
                alt="web development"
              />

              <div className="each_service_content">
                <p>
                  The term {`"web development"`} refers to the process of
                  designing, developing, and maintaining websites. Web design,
                  web publishing, web development, and database management are
                  all included. It is the building of an internet-based
                  application, such as a website.
                  <br />
                </p>
                <strong>Benefits of Web Development</strong>
                <ul className="pl-4">
                    <li>Boost customer involvement by providing interactive and dynamic web experiences.</li>
                    <li>Your website will be trustworthy, with improved security and scalability.</li>
                    <li>{`You'll`} save time and be able to focus on your business, with the help of built-in features and libraries.</li>
                    <li>It saves money while also providing potential for profit, with cost-effective development and hosting options.</li>
                    <li>You can get web-based services from a web development company specialized in using MERN, Django and other technologies.</li>
                    <li>You may design a professional-looking business platform, with the help of responsive and modern design frameworks.</li>
                    <li>You will have simple navigation for your company, with easy-to-use routing and navigation features.</li>
                    <li>{`You'll`} be able to reach out to a larger number of people, with the help of SEO friendly and mobile-optimized websites.</li>
                    <li>Companies that specialize in web development can help you enhance your sales, with the help of e-commerce and payment integration solutions.</li>
                    <li>Increasing customer retention, by providing personalized and seamless web experiences.</li>
                    <li>Increasing Accessibility, by adhering to web accessibility standards</li>
                    <li>Customers should be given value, with the help of web analytics and user feedback tools.</li>
                    <li>Changing the Way People Shop, by providing seamless and convenient online shopping experiences.</li>
                    <li>Improving Brand Recognition and Image, with the help of a professional and well-designed website.</li>
                    <li>Increasing productivity of staff, by providing collaborative and efficient web-based tools.</li>
                    <li>Stand out among a crowded field of competitors, with the help of unique and innovative web solutions.</li>
                    <li>Customer Loyalty Should Be Nurtured</li>
                    <li>Specialized Services</li>
                    <li>Payment Solution-both Stripe & PayPal</li>
                </ul>
              </div>
            </div> */}
          </div>

        </section>
        {/* end service section */}
        <Footer />
      </div>
    </>
  );
};

export default WebDevelopment;
