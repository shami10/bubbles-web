import React from 'react'
import { Link } from 'react-router-dom'
import Bubble from '../../assets/images/bubble-lg.png'
import './style.css'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img src={Bubble} alt="bubble" className="left-bubble" />
        <img src={Bubble} alt="bubble" className="right-bubble" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="contact">
                <div className="contat-title mb-5">CONTACT US</div>
                <div className="contacts-info">
                  Phone :<a href="/">(646) 586 3347</a>
                </div>
                <div className="contacts-info">
                  Email :<a href="/">info@getbubblesapp.com</a>
                </div>
                <div className="contacts-info">
                  <h2>Mailing Address:</h2>
                  <p>
                    1444 5th Avenue Apt 7T <br /> New York, NY, 10017
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact">
                <div className="contat-title">Feel free to contact us</div>
                <div className="contat-des">
                  If you are interested in finding out more about Bubbles. If
                  you would like to join our listing and benefit from our
                  services.
                </div>
                <form>
                  <div className="form-group">
                    <label>Name *</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Message </label>
                    <textarea
                      type="text"
                      className="form-control"
                      rows={4}
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                All &copy; Rights Reserved By Bubbles
              </div>
              <div className="col-lg-6 text-right">
                <Link to="/policy">Privacy & Terms of Services</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
