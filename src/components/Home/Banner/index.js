import React from 'react'
import Particles from 'react-particles-js'

import Apple from '../../../assets/images/appstore.png'
import Android from '../../../assets/images/googleplay.png'
import BannerOne from '../../../assets/images/BannerOne.png'
import BannerTwo from '../../../assets/images/BannerTwo.png'
import BannerThree from '../../../assets/images/BannerThree.png'
import './style.css'

const Banner = () => {
  return (
    <>
      <div className="particals">
        <Particles
          params={{
            particles: {
              number: {
                value: 40,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.5,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: 'top',
                out_mode: 'out',
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble',
                },
                onclick: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                bubble: {
                  distance: 50,
                  duration: 2,
                  size: 2,
                  opacity: 0,
                },
                repulse: {
                  distance: 200,
                  duration: 2,
                },
              },
            },
          }}
        />
      </div>
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
