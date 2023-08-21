import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Contact from '@/sections/Contact/Contact'

export default function Layout({children}) {
  return (
    <div className='layout-maindiv'> 
           <Header/>
                 {children}
           <Contact/>     
           <Footer/>      
    </div>
  )
}
