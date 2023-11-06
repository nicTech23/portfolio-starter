import React, { useContext } from 'react'
import "./Intro.css"
import Github from '../../img/github.png'
import Linkdin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Buy from '../../img/boy.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FlooatingDiv from '../floatingDiv/FlooatingDiv'
import { themeContext } from '../../Context'

const Intro = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  return (
    <div className='intro'>
      <div className='i-left'>
       <div className='i-name'>
        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>Hy! I Am</span>
        <span>Nicholas Oppong</span>
        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>Frontend Developer with high level of
            experience in web designing and develpment,
            producing the Quality work </span>
       </div>

       <button className=' button i-button'>Hire me</button>

       <div className='i-icon'>
        <img src={Github} alt='Github'/>
        <img src={Linkdin} alt='Linkdin'/>
        <img src={Instagram} alt='Instagram'/>
       </div>
      </div>

      <div className='i-rigth'>
        <img src={Vector1} alt=''/>
        <img src={Vector2} alt=''/>
        <img src={Buy} alt=''/>
        <img src={Glassesimoji} alt=''/>

        <div style={{top:"-4%", left:"68%"}}>
            <FlooatingDiv image={Crown} text1='Web' text2 = 'Developer'/>
        </div>

        <div style={{top:"18rem", left:"0rem"}}>
            <FlooatingDiv image={Thumbup} text1='Best Design' text2 = 'Award'/>
        </div>

        {/*blur*/}
        <div className='blur' style={{background:'rgb(238 210 255)' }}></div>
        <div className='blur' style={{
            background:'#C1F5FF',
            top: '17rem',
            width: '21rem',
            height:'11rem',
            left: '-9rem'
            }}>

        </div>
      </div>
    </div>
  )
}

export default Intro
