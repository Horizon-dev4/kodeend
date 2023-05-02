import React from 'react'

const QuoteForm = () => {
  return (
    <section className="contact_section ">
          <div className="container">            
            <div className="row">
                  <div className="col-md-9 mx-auto">
                    <div className="contact-form">
                      <form>
                        <div className="row">
                        <div className='col-md-6'>
                          <input type="text" placeholder="Your Name " name='UserName' />
                        </div>
                        <div className='col-md-6'>
                          <input type="email" placeholder="Email Address" name='Email' />
                        </div>
                        <div className='col-md-12'>
                          <input
                            type="text"
                            name='Message'
                            placeholder="Message"
                            className="input_message"
                          />
                        </div>
                        <div className="d-flex justify-content-center">
                          <button type="submit" className="btn_on-hover">
                            Send
                          </button>
                        </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
          </div>
      </section>
  )
}

export default QuoteForm
