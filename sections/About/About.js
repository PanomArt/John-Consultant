import { TitleSection } from '@/components/Title'
import React,{useState,useEffect} from 'react'
import { Parallax } from 'react-parallax'

export default function About() {
  
  return (
        <section id='about' >
          <div className='about-container'>
                <TitleSection title="about us" className='mt-20'/>
                <div className='description'>
                     <p className='mt-40'>
                      I'm a paragraph. Click here to add your own text 
                      and edit me. It’s easy. Just click “Edit Text” or 
                      double click me to add your own content and make changes 
                      to the font. Feel free to drag and drop me anywhere
                      you like on your page. I’m a great place for you to 
                      tell a story and let your users know a little more 
                      about you.
                     </p>
                     <p className='mt-40'>
                      I'm a paragraph. Click here to add your own text 
                      and edit me. It’s easy. Just click “Edit Text” or 
                      double click me to add your own content and make changes 
                      to the font. Feel free to drag and drop me anywhere
                      you like on your page. I’m a great place for you to 
                      tell a story and let your users know a little more 
                      about you.
                     </p>
                </div>
                <button className='secondary-button mt-60'>Learn More</button>
          </div>
        </section>       
  )
}
