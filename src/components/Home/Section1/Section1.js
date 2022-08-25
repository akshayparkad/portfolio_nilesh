import React from 'react'
import './Section1.css'
import lappy from './lappy.jpg'

export const Section1 = () => {
    return (
        <div>
            <div className='Section1'>
                <h1>Ideas, Creativity, Design</h1>
            </div>
            <div className='Section1-image'>
                <img src={lappy} alt='lappy'/>
            </div>
        </div>
    )
}
