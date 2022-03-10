import React from 'react'
import About from '../../components/Home/About'
import Banner from '../../components/Home/Banner'
import Services from '../../components/Home/Services'
import Steps from '../../components/Home/Steps'

import './style.css'

const Home = () => {
    return <>
        <Banner />
        <About />
        <Services />
        <Steps />
    </>
}

export default Home