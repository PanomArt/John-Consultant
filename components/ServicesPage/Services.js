import React from 'react'
import { TitleLg } from '../Title'
import { services } from '@/data/data'

export default function Services() {
  function formatToDollar(number) {
    const formattedNumber = number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  
    return formattedNumber;
  }
  return (
    <section className='services-maindiv'>

         <div className='services-header'>
               <TitleLg title='SERVICES'/>
         </div>

         {services.map((item) => (
            <div className='content' key={item.id}>

                   <div className='image'>
                        <img src={item.img}/>
                   </div>

                   <div className='text'>
                        <p className='service-title'>{item.service}</p>
                        <p className='price'>1 hr<br/>
                          {formatToDollar(item.price)}
                        </p>
                        <button className='book-btn'>Book Now</button>
                   </div>
            </div>
         ))}
    </section>
  )
}
