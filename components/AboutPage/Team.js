import React from 'react'
import { TitleSection } from '../Title'
import { team } from '@/data/data'

export default function Team() {
  return (
    <section className='team'>

          <div className='team-title'>
              <TitleSection title='OUR TEAM'/>
              <p className='title-description'>I'm a paragraph. 
                  Click here to add your own text and edit me
              </p>
          </div>

          <div className='team-content'>
                 {team.map((item)=>(
                     <div className='content' key={item.id}>

                          <div className='team-img'>
                                <img src={item.img}/>
                          </div>

                          <div className='team-details'>
                                <p className='name'>{item.name}</p>
                                <p className='depart'>{item.department}</p>
                                <p className='description'>{item.description}</p>
                          </div>
                     </div>
                 ))}
          </div>
    </section>
  )
}
