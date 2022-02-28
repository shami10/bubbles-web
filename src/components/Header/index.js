import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../assets/images/logo.png'
import './style.css'
import TopHeader from './TopHeader'

const Header = () => {
  return (
    <>
      <TopHeader />
      <div className="main-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light p-0">
            <Link className="navbar-brand" to="/">
              <img src={Logo} alt="logo" />
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
              <span className="fas fa-bars"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Who We Are
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    What We Do
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#works">
                    How it works
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <a
                  href="https://getbubblesapp.com/admin"
                  className="btn btn-primary my-2 my-sm-0"
                  type="button"
                  target="blank"
                >
                  Admin Login
                </a>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
