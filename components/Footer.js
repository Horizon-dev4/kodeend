import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

const Footer = () => {
  return (
    <>
      <div className="footer_bg">
        {/* info section */}
        <section className="info_section">
          <div className="container">
            <div className="row">
              <div className="col-md-3 mb-4 mb-md-0 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_info">
                  <h5>Informations</h5>
                  <p>
                  Transform your business with our AI-powered web applications and data science services.
                  </p>
                </div>
              </div>
              <div className="col-md-3 mb-4 mb-md-0 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_contact">
                  <h5>Address</h5>
                  <div>
                    <div className="img-box">
                      <Image src="/assets/images/location-white.png" width={18} height={24} alt="google map" />
                    </div>
                    <p>
                    Räfsgatan 36, <br/>21633 Limhamn, <br/>Sweden
                    </p>
                  </div>
                  <div>
                    <div className="img-box">
                      <Image
                        src="/assets/images/telephone-white.png"
                        width={12} height={22}
                        alt="contact number"
                      />
                    </div>
                    <p><a href="tel: +46 708698276">+46 708698276</a></p>
                  </div>
                  <div>
                    <div className="img-box">
                      <Image
                        src="/assets/images/envelope-white.png"
                        width={18} height={15}
                        alt=""
                      />
                    </div>
                    <p><a href="mailto: info@kodeend.com">info@kodeend.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 mb-4 mb-md-0 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_insta">
                  <h5>Legals</h5>
                  <div className="insta_container">
                      <div><Link href="/terms-and-conditions">Terms and Conditions</Link></div>
                      <div><Link href="/privacy-policy">Privacy Policy</Link></div>
                      <div><Link href="/gdpr">GDPR</Link></div>                      
                  </div>
                </div>
              </div>
              <div className="col-md-3 d-flex d-md-block flex-column align-items-center text-center text-md-left">
                <div className="info_form">
                  <h5>Social Links</h5>
                  {/* <form action="">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                  </form> */}
                  <div className="social_box">
                    <a href="">
                      <Image src="/assets/images/fb.png" width={30} height={30} alt="Facebook" />
                    </a>
                    <a href="">
                      <Image src="/assets/images/twitter.png" width={30} height={30} alt="Twitter" />
                    </a>
                    <a href="">
                      <Image src="/assets/images/linkedin.png" width={30} height={30} alt="Linked In" />
                    </a>
                    {/* <a href="">
                      <Image src="/assets/images/youtube.png" width={30} height={30} alt="YouTube" />
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end info_section */}
        {/* footer section */}
        <section className="container-fluid footer_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-9 mx-auto">
                <p className="footer_custom_color">
                  © 2020 All Rights Reserved By 
                   KodeEnd IT Solutions AB
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* footer section */}
      </div>

      {/* bootstrap scripts */}
      <Script
        type="text/javascript"
        src="/assets/js/jquery-3.4.1.min.js"
      />
      <Script type="text/javascript" src="/assets/js/bootstrap.js" />
    </>
  )
}

export default Footer
