import React from 'react'
import Head from 'next/head'
import Projects from '@/components/ProjectsPage/Projects'

export default function ProjectsPage() {
  return (
    <div className='projects-page-maindiv'>
        <Head>
            <title> Projects | Jame Consulting</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.png" />  
        </Head>
         <Projects/>
    </div>
  )
}
