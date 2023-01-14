import React from 'react'

const Header = () => {
  return (
    <>
     <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <img src="/assets/images/logo.png" alt="kodeend" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="s-1"> </span>
                <span className="s-2"> </span>
                <span className="s-3"> </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="index.html">
                        Home <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="about.html">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="service.html">
                        Service
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="portfolio.html">
                        Portfolio
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
    </>
  )
}

export default Header
