import React, { useContext } from 'react'
import './Testimonial.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import ProfilePic1 from '../../img/profile1.jpg'
import ProfilePic2 from '../../img/profile2.jpg'
import ProfilePic3 from '../../img/profile3.jpg'
import ProfilePic4 from '../../img/profile4.jpg'
import {Pagination} from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { themeContext } from '../../Context'

const Testimonial = () => {
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode

    const client = [
        {
            img: ProfilePic3,
            review: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img: ProfilePic2,
            review: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img: ProfilePic3,
            review: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        },
        {
            img: ProfilePic4,
            review: 
            "Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
        }
    ]
  return (
    <div className='t-wrapper'>
       <div className='t-heading'>
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
        <div className='blur t-blur1' style={{background:"var(--purple)"}}></div>
        <div className='blur t-blur1' style={{background: 'skyblue'}}></div>
       </div>

       <Swiper
       modules={[Pagination]}
       spaceBetween={30}
       slidesPerView={1}
       pagination={{clickable:true}}>
        {
            client.map((client, index)=>{
                return(
                    <SwiperSlide key={index} className='slide'>
                       <div className='testimonial'>
                        <img src={client.img} alt=''/>
                        <span style={darkMode? {color:"white"}: {color:"var(--black)"}}>{client.review}</span>
                       </div>
                    </SwiperSlide>
                )
            })
        }
       </Swiper>
    </div>
  )
}

export default Testimonial
