import React from 'react'
import logo from './imgnrslogo.png'
import imgnrsbanner from './imgnrsbanner.jpg'

export const Header = () => {
  return (
    <>
    <div className='header'>
                <img src={logo} alt="logo" />
                <h2>Revamping a digital agency</h2>
                <div className='header-row'>
                    <div className='header-col'>
                        <h6>CLIENT</h6>
                        <p className='paragraph'>IMGNRS</p>
                    </div>
                    <div className='header-col'>
                        <h6>PROJECT</h6>
                        <p className='paragraph'>Website</p>
                    </div>
                    <div className='header-col'>
                        <h6>WORK</h6>
                        <p className='paragraph'>Brand Identity, SEO, Website</p>
                    </div>
                </div>
                <p className='paragraph'>IMGNRS is a digital agency dedicated to app and website development through UX research, UI design, and business strategies. As of 2017, the company decided to focus business efforts primarily on monthly website management services. They were eager to update their company website to reflect their goals and business while also highlighting more recent works.
                <br />
                Together with my team, a proposal for an improved user experience was employed as part of a UX class project during the 2017 rainy season.
</p>
            </div>
            <div className='img-b'>
                <img src={imgnrsbanner} alt="imgnrsbanner" />
            </div>
            </>
  )
}
