import { TitleSection } from '@/components/Title'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { testimonial } from '@/data/data';

function NextArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <div className='next' onClick={onClick}>
      </div>
    </div>
  )
}

function PrevArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <div className='prev' onClick={onClick}>
      </div>
    </div>
  )
}


export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    draggable: true,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow/>,
    nextArrow: <NextArrow />,
    cssEase: "ease-in-out"

  }
  return (
    <section id='testimonial'>
          <div className='container'>
                <TitleSection title='testimonials'/>
                   <Slider {...settings} >
                       {testimonial.map((item)=>(
                            <div className='testimonial-slide' key={item.id}>
                            <div className='comment'>
                                  <p>{item.comment}</p>
                            </div>
      
                              <div className='employee'>
                                     <p className='depart'>{item.department}</p>
                                     <p className='name'>{item.name}</p>
                              </div>
                      </div>
                       ))}
                   </Slider>          
          </div>
    </section>
  )
}
