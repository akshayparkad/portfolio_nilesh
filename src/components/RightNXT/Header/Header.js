import React from 'react'
import './Header.css'
import nxtBanner from './nxt-banner.jpg'
import logo from './rightnxtlogo.svg'

export const Header = () => {
    return (
        <>
            <div className='header'>
                <img src={logo} alt="logo" />
                <h2>Online Business Portal</h2>
                <div className='header-row'>
                    <div className='header-col'>
                        <h6>CLIENT</h6>
                        <p className='paragraph'>rightNXT</p>
                    </div>
                    <div className='header-col'>
                        <h6>PROJECT</h6>
                        <p className='paragraph'>Online Business Portal</p>
                    </div>
                    <div className='header-col'>
                        <h6>WORK</h6>
                        <p className='paragraph'>Brand Identity, stationary, Merchandise,
                            SEO, SMO, Website, android, iOs app</p>
                    </div>
                </div>
                <p className='paragraph'>RighNxt helps discovering the outlets to meet your timely needs.
                    RightNXT is the local expert, and an easy to use online resource for finding useful information and insights on local businesses and nearby retailers.</p>
            </div>
            <div className='img-b'>
            <img src={nxtBanner} alt="nxtBanner" />
            </div>
            
        </>
    )
}
