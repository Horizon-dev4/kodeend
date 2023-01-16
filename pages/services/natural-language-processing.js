import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Meta from "../../components/Meta";

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
        <section className="service_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>Natural Language Processing</h2>
            </div>
            <div className="each_service">
              <Image src="/assets/images/natural-language-processing.jpg" className="img-fluid" width={700} height={600} alt="computer vision service"/>

              <div className="each_service_content">
                <p>
                Shortly we can define it like that way, it is a field of Artificial Intelligence that qualifies computers to analysis & understand the human language. <br /><br />
                NLP drives computer programs that translate text from one language to another, it helps to analyze, understand and generate text with Ai. NLP plays a growing role in corporate & enterprise solutions that helps business operations, increase employee productivity, digital assistants, speech to text dictation software, sentiment analysis- which we can even use in the sports winning prediction. 
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

export default NaturalLanguageProcessing;
