import React from 'react'
import './Footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Face from '@iconscout/react-unicons/icons/uil-facebook'
import GItHub from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt='wave' style={{width:"100%"}}/>
        <div className='f-content'>
            <span>nictech23@gmail.com</span>
            <span>+233 54 529 4916</span>
            <div className='f-icons'>
                <Insta color='white' size='3rem'/>
                <Face color='white' size='3rem'/>
                <GItHub color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer
