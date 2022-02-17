import React from 'react'
import StepOne from '../../../assets/images/StepOne.png'
import StepTwo from '../../../assets/images/StepTwo.png'
import StepThree from '../../../assets/images/StepThree.png'
import Bubble from '../../../assets/images/bubble-lg.png'

import './style.css'

const Steps = () => {
  return (
    <>
      <div className="steps">
        <div className="services-sec-title">WHAT WE DO</div>
        <img src={Bubble} alt="bubble" className="left-bubble" />
        <img src={Bubble} alt="bubble" className="right-bubble" />
        <div className="container">
          <div className="steps-item">
            <div className="row">
              <div className="col-lg-6 justify-content-center d-flex flex-column">
                <div className="step-title">STEP 1</div>
                <div className="step-des">
                  Choose the laundromat - dry cleaner of your choice
                </div>
              </div>
              <div className="col-lg-6">
                <div className="step-img">
                  <img src={StepOne} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="steps-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="step-img">
                  <img src={StepTwo} alt="" />
                </div>
              </div>
              <div className="col-lg-6 justify-content-center d-flex flex-column">
                <div className="step-title">STEP 2</div>
                <div className="step-des">
                  Schedule a pick up and delivery date
                </div>
              </div>
            </div>
          </div>
          <div className="steps-item mb-0">
            <div className="row">
              <div className="col-lg-6 justify-content-center d-flex flex-column">
                <div className="step-title">STEP 3</div>
                <div className="step-des">
                  Sit back and receive on time clean laundry
                </div>
              </div>
              <div className="col-lg-6">
                <div className="step-img">
                  <img src={StepThree} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Steps
