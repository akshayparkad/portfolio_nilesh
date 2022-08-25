import React from 'react'
import frisska from '../Home/Section3/frisska.jpg'
import next from '../Home/Section3/next.jpg'
import imgnrs from '../Home/Section3/imgnrs.jpg'
import {Link} from 'react-router-dom'

export const Work = () => {
  return (
    <div>
        <h2>My Work</h2>
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
            </div>
    </div>
  )
}