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
              <h2>Web Development</h2>
            </div>
            <div className="each_service">
              <Image
                src="/assets/images/web-development.jpg"
                className="img-fluid"
                width={700}
                height={600}
                alt="computer vision service"
              />

              <div className="each_service_content">
                <p>
                  The term {"web development"} refers to the process of
                  designing, developing, and maintaining websites. Web design,
                  web publishing, web development, and database management are
                  all included. It is the building of an internet-based
                  application, such as a website.
                  <br />
                </p>
                <strong>Benefits of Web Development</strong>
                <ul>
                    <li>Boost customer involvement.</li>
                    <li>Your website will be trustworthy.</li>
                    <li>save time and be able to focus on your business.</li>
                    <li>It saves money while also providing potential for profit.</li>
                    <li>You can get web-based services from a web development company.</li>
                    <li>You may design a professional-looking business platform.</li>
                    <li>You will have simple navigation for your company.</li>
                    <li>{`You'll`} be able to reach out to a larger number of people.</li>
                    <li>Companies that specialize in web development can help you enhance your sales.</li>
                    <li>Increasing customer retention</li>
                    <li>Increasing Accessibility</li>
                    <li>Customers should be given value.</li>
                    <li>Changing the Way People Shop</li>
                    <li>Improving Brand Recognition and Image</li>
                    <li>Increasing productivity of staff</li>
                    <li>Stand out among a crowded field of competitors.</li>
                    <li>Customer Loyalty Should Be Nurtured</li>
                    <li>Specialized Services</li>
                    <li>Payment Solution-both Stripe & PayPal</li>
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

export default WebDevelopment;
