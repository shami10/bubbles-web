import React from 'react'

const TopHeader = () => {
  return (
    <>
      <div className="top-header">
        <div className="container1">
          <div className="row">
            <div className="col-7">
              <div className="mail">
                <a href="mailto:info@getbubblesapp.com">
                  <i className="fas fa-envelope"></i>
                  info@getbubblesapp.com
                </a>
              </div>
            </div>
            <div className="col-5">
              <div className="social-links">
                <a href="https://www.facebook.com/getbubblesapp" target="_blank">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/bubbles.app/" target="_blank">
                  <i className="fab fa-instagram-square"></i>
                </a>
                <a href="https://twitter.com/getbubblesapp" target="_blank">
                  <i class="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopHeader
