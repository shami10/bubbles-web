import React from 'react'

import Apple from '../../../assets/images/appstore.png'
import Android from '../../../assets/images/googleplay.png'
import BannerOne from '../../../assets/images/BannerOne.png'
import BannerTwo from '../../../assets/images/BannerTwo.png'
import BannerThree from '../../../assets/images/BannerThree.png'
import './style.css'

const Banner = () => {
  return (
    <>
      <div className="main-slider">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-lg-4 justify-content-center d-flex flex-column">
                    <div className="banner-label">
                      Reliability. Trust . Value.
                    </div>
                    <div className="banner-des">
                      #ExperienceLaundryDifferently
                    </div>
                    <div className="app-download">
                      <label>Download</label>
                      <a href="apple">
                        <img src={Apple} alt="apple-store" />
                      </a>
                      <a href="android">
                        <img src={Android} alt="google-store" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="banner-img">
                      <img src={BannerOne} alt="SliderImg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner-img mockup-img">
                      <img src={BannerTwo} alt="SliderImg" />
                    </div>
                  </div>
                  <div className="col-lg-4 justify-content-center d-flex flex-column">
                    <div className="banner-label">
                      Reliability. Trust . Value.
                    </div>
                    <div className="banner-des">
                      #ExperienceLaundryDifferently
                    </div>
                    <div className="app-download">
                      <label>Download</label>
                      <a href="apple">
                        <img src={Apple} alt="apple-store" />
                      </a>
                      <a href="android">
                        <img src={Android} alt="google-store" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row">
                  <div className="col-lg-4 justify-content-center d-flex flex-column">
                    <div className="banner-label">
                      Reliability. Trust . Value.
                    </div>
                    <div className="banner-des">
                      #ExperienceLaundryDifferently
                    </div>
                    <div className="app-download">
                      <label>Download</label>
                      <a href="apple">
                        <img src={Apple} alt="apple-store" />
                      </a>
                      <a href="android">
                        <img src={Android} alt="google-store" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="banner-img mockup-img">
                      <img src={BannerThree} alt="SliderImg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
