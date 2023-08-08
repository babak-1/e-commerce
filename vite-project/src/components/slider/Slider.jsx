import React from 'react'
import style from './Slider.module.scss'

import iphonesPic from '../../assets/image/iphonesPhoto.svg'
import samsungGalaxy from '../../assets/image/galaxyforCard.svg'
import iphone8 from '../../assets/image/iphone-8-plus.svg'

import  {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Card from '../card/Card';
 
const Slider = () => {
  return (
    <Swiper spaceBetween={3}
    slidesPerView={1}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    breakpoints={{
        0:{
            pagination:false,
        },
        600:{
            pagination:{
                clickable:true
            }
        }
        
    }}

    style={{
        "--swiper-pagination-color": "#2DD06E",
        "--swiper-pagination-bullet-inactive-color": "#909090",
        "--swiper-pagination-bullet-inactive-opacity": "1",
        "--swiper-pagination-bullet-size": "8px",
        "--swiper-pagination-bullet-horizontal-gap": "6px"
      }}
    >
        <SwiperSlide>
            <Card sliderImage={iphonesPic}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card  sliderImage={iphone8}/>
        </SwiperSlide>
        <SwiperSlide>
            <Card sliderImage={samsungGalaxy}/>
        </SwiperSlide>
    </Swiper>
  )
}

export default Slider