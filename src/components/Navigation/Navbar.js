import React, { useRef } from 'react'
import './Navbar.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const navRef = useRef()

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  const hideNavbar =()=>{
    navRef.current.classList.remove("responsive_nav")
  }

  return (
    <>
      <header>
        <div className='logo'>
          <span className='logo-name'>Nilesh Jadhav</span>
          <span className='logo-line'><hr /></span>
          <span className='logo-email'>nilesh@imdesigner.in</span>
        </div>

        <nav ref={navRef}>
          <Link to="/" onClick={hideNavbar}>HOME</Link>
          <span class="bar">|</span>
          <Link to="/work" onClick={hideNavbar}>WORK</Link>          
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </>
  )
}

export default Navbar