import React, { useState , useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navigator({mobileActive,setMobileActive}) {
    const router = useRouter();
    const [activeLink,setActiveLink] = useState("");
    useEffect(() => {
        setActiveLink(router.pathname)
    },[router.pathname])
  return (
    <nav className='navigator'>
            <Link href='/about' className={activeLink == "/about" ? "activeLink" : ""} onClick={()=> setMobileActive(false)}>About</Link>
            <Link href='/projects' className={activeLink == "/projects" ? "activeLink" : ""} onClick={()=> setMobileActive(false)}>Projects</Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : ""} onClick={()=> setMobileActive(false)}>Services</Link>
            <Link href='/plans-and-pricing' className={activeLink == "/plans-and-pricing" ? "activeLink" : ""} onClick={()=> setMobileActive(false)}>Plans & Pricing</Link>
            <Link href='/tools-and-tips' className={activeLink == "/tools-and-tips" ? "activeLink" : ""} onClick={()=> setMobileActive(false)}>Tools & Tips</Link>
            <Link href='/#contact' onClick={()=> setMobileActive(false)}>Contact</Link>
    </nav>
  )
}
