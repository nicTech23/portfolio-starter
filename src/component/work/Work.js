import React, { useContext } from 'react'
import './Work.css'
import Upwork from '../../img/Upwork.png'
import Fiver from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { themeContext } from '../../Context'
 
const Work = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

  return (
    <div className='work'>
       <div className='w-left'>
        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>Work for All these  </span>
        <span>Brand & Clients</span>
        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>
            Lorem i ssimpley text of printing of printing Lorem
            <br/>
            is simpley dummy text of printing
            <br/>
            Lorem i ssimpley text of printing of printing Lorem
            <br/>
            is simpley dummy text of printing
        </span>
            <button className='button s-button' >Hire me</button>
        <div className='blur s-blur' style={{background:"#ABF1FF94"}}></div>
      </div>

      <div className='w-right'>
        <div className='w-mainCircle'>
            <div className='w-secCircle'>
                <img src={Upwork} alt='upwork'/>
            </div>
            <div className='w-secCircle'>
                <img src={Fiver} alt='Fiver'/>
            </div>
            <div className='w-secCircle'>
                <img src={Amazon} alt='amazon'/>
            </div>
            <div className='w-secCircle'>
                <img src={Shopify} alt='shopify'/>
            </div>
            <div className='w-secCircle'>
                <img src={Facebook} alt='face'/>
            </div>
        </div>

        {/*Background circle */}
        <div className='w-backCircle blueCircle' style={darkMode? {backgroundColor:"blue"}: {backgroundColor:"blue"}}></div>
        <div className='w-backCircle yellowCircle' style={darkMode? {backgroundColor:"var(--orange)"}: {backgroundColor:"var(--orange)"}}></div>
      </div>
    </div>
  )
}

export default Work
