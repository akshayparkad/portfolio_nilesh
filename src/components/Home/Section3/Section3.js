import React from 'react'
import './Section3.css'
import frisska from './frisska.jpg'
import imgnrs from './imgnrs.jpg'
import next from './next.jpg'
import portfolio from './portfolio.jpg'
import {Link} from 'react-router-dom'

export const Section3 = () => {
    return (
        <>
            <h2>Projects</h2>
            <div className='row2'>
                <div className='column2'>
                    <Link to="/frisska">
                    <img src={frisska} alt='frisska' />
                    <h4>Frisska</h4>
                    </Link>
                    <p className='paragraph'>
                        The motive was to create a brand that delivered healthy food on the go! That’s how we came up with ‘FRISSKA’.
                        Frisska delivers healthy and fresh food at your door steps.
                    </p>
                </div>
                <div className='column2'>
                <Link to="/rightNXT">
                    <img src={next} alt='RightNXT' />
                    <h4>RightNXT</h4>
                    </Link>
                    <p className='paragraph'>
                        The motive was to create a brand that delivered healthy food on the go! That’s how we came up with ‘FRISSKA’.
                        Frisska delivers healthy and fresh food at your door steps.
                    </p>
                </div>
            </div>
            <div className='row2'>
                <div className='column2'>
                <Link to="/imgnrs">
                    <img src={imgnrs} alt='IMGNRS' />
                    <h4>IMGNRS</h4>
                    </Link>
                    <p className='paragraph'>
                        The motive was to create a brand that delivered healthy food on the go! That’s how we came up with ‘FRISSKA’.
                        Frisska delivers healthy and fresh food at your door steps.
                    </p>
                </div>
                <div className='column2'>
                    <img src={portfolio} alt='IMGNRS' />
                    <h4>Portfolio</h4>
                    <p className='paragraph'>
                        coming soon
                    </p>
                </div>
            </div>

            <div className='t-heading-t'>
            “Great opportunities come to those who make the most of small ones.”
            </div>

        </>
    )
}
