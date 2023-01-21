import React from 'react'

const ContactForm = () => {
  return (
    <>
      <section className="contact_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>contact us</h2>
            </div>
            <div className="">
              <div className="">
                <div className="row">
                  <div className="col-md-9 mx-auto">
                    <div className="contact-form">
                      <form action="https://formspree.io/f/mrgvbrkj" method='POST'>
                        <div>
                          <input type="text" placeholder="Full Name " name='UserName' />
                        </div>
                        <div>
                          <input type="text" placeholder="Phone Number" name='UserPhone' />
                        </div>
                        <div>
                          <input type="email" placeholder="Email Address" name='UserEmail' />
                        </div>
                        <div>
                          <input
                            type="text"
                            name='UserMessage'
                            placeholder="Message"
                            className="input_message"
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <button type="submit" className="btn_on-hover">
                            Send
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default ContactForm
