import React from 'react'
import logo from './frisska-logo.svg'
import frisskaBanner from './frisska-banner.jpg'


export const Header = () => {
    return (
        <>
            <div className='header'>
                <img src={logo} alt="logo" />
                <h2>Deliver – Healthier - Food</h2>
                <div className='header-row'>
                    <div className='header-col'>
                        <h6>CLIENT</h6>
                        <p className='paragraph'>Frisska</p>
                    </div>
                    <div className='header-col'>
                        <h6>PROJECT</h6>
                        <p className='paragraph'>Healthy Food</p>
                    </div>
                    <div className='header-col'>
                        <h6>WORK</h6>
                        <p className='paragraph'>Brand Identity, stationary, packaging, Merchandise,
                            SEO, SMO, Website, android, iOs app</p>
                    </div>
                </div>
                <p className='paragraph'>The motive was to create a brand that delivered healthy food on the go! That’s how we came up with ‘FRISSKA’.
                    Frisska delivers healthy and fresh food at your door steps.</p>
            </div>
            <div className='img-b'>
                <img src={frisskaBanner} alt="frisskaBanner" />
            </div>

        </>
    )
}
