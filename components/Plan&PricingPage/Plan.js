import React from 'react'
import { TitleLg } from '../Title'
import { planprice } from '@/data/data'
import { CiCircleCheck } from "react-icons/ci";

export default function PlanPage() {
  return (
    <div className='plan-page-maindiv'>
         <div className='plan-title'>
               <TitleLg title="GROWTH AND INNOVATION PLANS"/>
               <p>
                   We help businesses improve their performance 
                   through innovation in products, services, 
                   and strategy
               </p>
         </div>

         <div className='plan-main container'>
               <div className='content grid-3'>
                      {planprice.map((item => (
                         <div className='card'>
                             <div className={`above-card ${item.bestvalue ? "bestvalue":""}`}>
                                  <p className='ribbon'>Best Value</p>
                                  <p className='card-title'>{item.title}</p>
                                  <p className='card-price'><span>$</span>{item.price}</p>
                                  <p className='card-description'>{item.description}</p>
                                  <p className='card-valid'>Valid for {item.valid} months</p>
                                  <button className='card-button'>Select</button>
                             </div>
        
                             <div className='below-card'>
                                  <ul className='benefits'>
                                       {item.benefit.map((item)=>(
                                            <li className='service-list'><span><CiCircleCheck size={19}/></span>{item}</li>
                                        ))}
                                  </ul>
                             </div>  

                         </div>
                      )))}
               </div>
         </div>
    </div>
  )
}
