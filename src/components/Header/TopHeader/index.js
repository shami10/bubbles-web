import React from 'react'


const TopHeader = () => {
    return <>
        <div className='top-header'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='mail'>
                            <a href='mailto:info@getbubblesapp.com'>
                                <i className='fas fa-envelope'></i>
                                info@getbubblesapp.com
                            </a>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='social-links'>
                            <a href='facebook'>
                                <i className='fab fa-facebook-square'></i>
                            </a>
                            <a href='instagram'>
                                <i className='fab fa-instagram-square'></i>
                            </a>
                            <a href='twitter'>
                                <i class="fab fa-twitter-square"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default TopHeader