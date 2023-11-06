import React from 'react'
import './FloatingDiv.css'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const FlooatingDiv = ({image, text1, text2}) => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode


  return (
    <div className='floatingDiv' style={darkMode? {color:"var(--gray)"}: {color:"var(--gray)"}}>
      <img src={image} alt='Crown'/>
      <span>
        {text1} <br/>
        {text2}
      </span>
    </div>
  )
}

export default FlooatingDiv
