import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <div className='footer'>
                <div className='row5'>
                    <div className='column5'>
                        <div className='get-in-touch'>
                            Get In Touch
                        </div>
                        <div className='footer-email'>
                            nilesh@iamdesigner.in
                        </div>
                        <div className='footer-text'>
                           <a style={{background: "#2f2f2f", color: "white"}} href="https://www.linkedin.com/in/iam-nilesh" target="_blank">LinkedIn</a>
                            <br />
                            <Link style={{background: "#2f2f2f", color: "white"}} to="/work">Work</Link>
                             
                        </div>
                    </div>
                    <div className='column5'>
                        <div className='footer-text-small'>
                    Website design and develop © 2022 Nilesh Jadhav
                    </div>
                    </div>
                </div>
        </div>
    )
}
