import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <>
     <header className="header_section">
          <div className="container">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <Link className="navbar-brand" href="/">
                <Image src="/assets/images/logo.png" width={130} height={47} alt="kodeend" />
              </Link>
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
                    <li className="nav-item">
                      <Link className="nav-link" href="/">
                        Home
                        {/* Home <span className="sr-only">(current)</span> */}
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/about">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/services">
                        Service
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                      <Link className="nav-link" href="/portfolio">
                        Portfolio
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact">
                        Contact
                      </Link>
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
