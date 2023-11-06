import React, { useContext } from 'react'
import './Experience.css'
import { themeContext } from '../../Context'
const Experience = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className='experience '>
      <div className='achivement'>
        <div className='circle' style={darkMode? {color:"white"}: {color:"var(--black)"}}>8+</div>
        <span>years</span>
        <span>Experience</span>
      </div>
      <div className='achivement'>
        <div className='circle' style={darkMode? {color:"white"}: {color:"var(--black)"}}>20+</div>
        <span>Complete</span>
        <span>Project</span>
      </div>
      <div className='achivement'>
        <div className='circle' style={darkMode? {color:"white"}: {color:"var(--black)"}}>5+</div>
        <span>Companies</span>
        <span>work</span>
      </div>
    </div>
  )
}

export default Experience
