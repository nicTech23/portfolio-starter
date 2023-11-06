import React, { useContext } from 'react'
import './Contact.css'
import { themeContext } from '../../Context'

const Contact = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

  return (
    <div  className='contact-form'>
      <div className='w-left '>
        <div className='awesome'>
            <span style={darkMode? {color:"white"}: {color:"var(--black)"}} >Get in touch</span>
            <span>Contact me</span>
            <div className='blur t-blur1' style={{background:"#ABF1FF94"}}></div>
        </div>
      </div>
      <div className='c-right'>
            <form>
                <input type='text' name='user_name' className='user' placeholder='Name'/>
                <input type='email' name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type='submit' value='Send' className='button'/>
                <div className='blur t-blur1' style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact
