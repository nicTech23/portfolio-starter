import React, { useContext } from 'react'
import './Card.css'
import { themeContext } from '../../Context'

const Card = ({emoji, heading, detail}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode


  return (
    <div className='card'>
      <img src={emoji}/>
      <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>{heading}</span>
      <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>{detail}</span>
      <button className='c-button'>Learn more</button>
    </div>
  )
}

export default Card
