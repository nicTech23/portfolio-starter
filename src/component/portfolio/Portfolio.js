import React, { useContext } from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide } from 'swiper/react'
import Sidebar from '../../img/sidebar.png'
import Ecommerce from '../../img/ecommerce.png'
import HOC from '../../img/hoc.png'
import MusicApp from '../../img/musicapp.png'
import "swiper/css"
import { themeContext } from '../../Context'

const Portfolio = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className='portfolio'>
        {/*heading */}
        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>Recent Project</span>
        <span>Portfolio</span>

        {/*slide */}
        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'>
            <SwiperSlide>
               <img src={Sidebar} alt='sidebar'/> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={Ecommerce} alt='Ecommerce'/> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={HOC} alt='hoc'/> 
            </SwiperSlide>
            <SwiperSlide>
               <img src={MusicApp} alt='musicapp'/> 
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio
