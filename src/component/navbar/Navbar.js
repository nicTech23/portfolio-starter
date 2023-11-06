import React from 'react'
import './Navbar.css'
import Toggle from '../toggle/Toggle'
const Navbar = () => {
  return (
    <div className=' n-wrapper'>
        <div  className='n-left flex flex-1 text-center gap-2' >
            <div className='n-name font-bold'>Nicholas</div>
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className='n-list'>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className='button n-button'>
                Contact us
            </button>
        </div>
    </div>
  )
}

export default Navbar
