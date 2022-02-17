import React from 'react'

import Wash from '../../../assets/images/Wash_machine.png'
import Dry from '../../../assets/images/dry_clean.png'
import Tailoring from '../../../assets/images/Tailoring.png'
import BubbleS from '../../../assets/images/bubble-sm.png'
import './style.css'

const Services = () => {
    return <>
        <div className='services-sec'>
            <div className='container'>
                <img src={BubbleS} alt="bubble" className='middle-b' />
                <div className='services-sec-title'>WHAT WE DO</div>
                <div className='services-sec-des'>Browse our listing and find top quality laundromats and dry cleaners that offer these services</div>
                <div className='row'>
                    <div className='col-lg-4'>
                        <div className='services-item'>
                            <img src={Wash} alt="washing" />
                            <div className='services-item-label'>Wash & Fold</div>
                            <div className='services-item-des'>
                                Have your garments washed, dried, and folded before they're given back to you
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='services-item'>
                            <img src={Dry} alt="washing" />
                            <div className='services-item-label'>Dry Cleaning</div>
                            <div className='services-item-des'>
                                Uses liquids other than water to clean clothes, bedding, upholstery and other types of fabrics.
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='services-item'>
                            <img src={Tailoring} alt="washing" />
                            <div className='services-item-label'>Tailoring</div>
                            <div className='services-item-des'>
                                Reparation and/or alterations
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Services
