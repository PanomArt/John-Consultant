import Services from '@/components/ServicesPage/Services'
import Head from 'next/head'
import React from 'react'

export default function ServicesPage() {
  return (
    <div className='services-page-maindiv'>
         <Head>
             <title>Services | Jame Consulting</title>
             <meta name="description" content="Generated by create next app" />
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <link rel="icon" href="/favicon.png" />  
         </Head>
         <Services/>
    </div>
  )
}
