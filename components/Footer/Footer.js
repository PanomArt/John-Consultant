import React , { useState , useEffect} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaTwitter, FaFacebookF} from "react-icons/fa";


export default function Footer() {
    
  return (
    <footer className='footer-maindiv'>
          <div className='container'>
                <div className='content'>
                  
                       <div className='first-col'>
                             <div className='footer-title'>
                                  <a className='title'>JAMES CONSULTING</a>
                             </div>
                             
                             <div className='address'>
                                  <p>
                                       500 Terry Francine Street,<br/>
                                       San Francisco, CA 94158<br/>
                                       Mail: info@mysite.com<br/>
                                       Tel: 123-456-7890
                                  </p>
                             </div>
                       </div>

                       <div className='second-col'>
                             <div className='footer-title'>
                                   <p className='title'>MENU</p>
                             </div>
                             <nav className='footer-navigator'>
                                 <Link href='/about' >About</Link>
                                 <Link href='/projects' >Projects</Link>
                                 <Link href='/services' >Services</Link>
                                 <Link href='/plans-and-pricing' >Plans & Pricing</Link>
                                 <Link href='/tools-and-tips' >Tools & Tips</Link>
                                 <Link href='#contact' >Contact</Link>
                             </nav>
                       </div>

                       <div className='third-col'>
                                   <div className='footer-title'>
                                          <p className='title'>socials</p>
                                   </div>

                                   <div className='social-icon'>
                                          <p>
                                             <span className='icon'><FaFacebookF/></span>
                                             <span className='icon'><FaTwitter/></span>
                                          </p>
                                   </div>   

                                   <div className='legal'>
                                        <p className='legal-text'>
                                           © 2035 by JAMES CONSULTING<br/>
                                           Powered and secured by <span>Wix</span>
                                        </p>
                                   </div>
                       </div>
                </div>
          </div>
    </footer>
  )
}
