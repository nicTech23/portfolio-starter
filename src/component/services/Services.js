import React, { useContext } from 'react'
import './Services.css'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import HeartEmoji from '../../img/heartemoji.png'
import Card from '../card/Card'
import { themeContext } from '../../Context'

const Services = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='services'>
        {/*Left */}
      <div className='awesome'>
        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>Awesome</span>
        <span>Services</span>
        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>
            Lorem i ssimpley text of printing of printing Lorem
            <br/>
            is simpley dummy text of printing
        </span>
        <a href='' download> 
            <button className='button s-button' >Download CV</button>
        </a>
        <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
      </div>

          {/*Right */}
      <div className='cards'>
       <div style={{left:"14rem"}}>
        <Card 
            emoji = {Glasses} 
            heading ={"Design"}
            detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}/>  
       </div>

       <div style={{top: '12rem', left:"-4rem"}}>
        <Card 
            emoji = {Glasses} 
            heading ={"UI/EX"}
            detail = {"Lorem i ssimpley text of printing of printing Lorem"}/>  
       </div>

       <div style={{top:"19rem", left:"12rem"}}>
        <Card 
            emoji = {Glasses} 
            heading ={"Developer"}
            detail = {"Html, Css, JavaScript, React"}/>  
       </div>
        <div className='blur s-blur2' style={{background:"var(--purple"}}></div>
      </div>
    </div>
  )
}

export default Services
