import { TitleSection } from '@/components/Title'
import { client } from '@/data/data';
import React from 'react'
import { GrFacebook , GrAmazon  , GrWindows , GrTwitter} from "react-icons/gr";

export default function Client() {
  return (
    <section id='client'>
          <div className='container'>
                 <TitleSection title="our clients"/>
                 <div className='client-list'>
                      {client.map(item=>(
                        <>
                            <img src={item.logo}/>
                        </>
                      ))}
                 </div>
          </div>
    </section>
  )
}
