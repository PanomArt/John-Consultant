import React from 'react'
import { TitleLg, TitleSection } from '../Title'
import { projects } from '@/data/data'

export default function Projects() {
  return (
    <section className='projects-maindiv'>

         <div className='projects-maintitle'>
               <TitleLg title="PROJECTS"/>
         </div>
         
         <div className='projects-container'>
               {projects.map((item)=>(
                   <div className='content' key={item.id}>
                         <img src={item.img}/>
                         <TitleSection title={item.project}/>
                         <p className='project-desc'>{item.description}</p>
                   </div>
               ))}
         </div>
    </section>
  )
}
