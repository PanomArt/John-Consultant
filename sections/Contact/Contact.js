import { TitleSection } from '@/components/Title'
import React from 'react'
import Map from './Map'

export default function Contact() {
  return (
    <section id='contact'>
        <TitleSection title='contact' />

              <form className='contact-forms'>

                     <div className='forms grid-2'> {/*Name*/}
                             <div className='input-form'>
                                    <p className='text-form'>First Name</p>
                                    <input type='text'/>
                             </div>
                             <div className='input-form'>
                                    <p className='text-form'>Last Name</p>
                                    <input type='text'/>
                             </div>
                     </div>

                     <div className='forms grid-2'> {/*Email and Subject*/}
                             <div className='input-form'>
                                    <p className='text-form'>Email*</p>
                                    <input type='email'/>
                             </div>
                             <div className='input-form'>
                                    <p className='text-form'>Subject</p>
                                    <input type='text'/>
                             </div>
                     </div>

                     <div className='forms'> {/*Message and Submit*/}
                             <div className='input-form'>
                                 <p className='text-form'>Message*</p>
                                    <div className='message-form'>
                                        <textarea className='message'></textarea>
                                        <button className='submit-btn'>Submit</button>
                                    </div>
                             </div>   
                     </div>
                     
                     <Map/>
              </form>

              
    </section>
  )
}
