import React , { useEffect , useState} from 'react'
import Link from 'next/link'
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";
import { useRouter } from 'next/router';
import Navigator from '../Navigator';

export default function Header() {
   const [prevScrollPos, setPrevScrollPos] = useState(0);
   const [visible, setVisible] = useState(true);
   const [mobileActive,setMobileActive] = useState(false);  

  useEffect(() => {
    
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
      setMobileActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos]);

  return (
    <header className='header-maindiv' style={{ top: visible ? 0 : '-5em' }}>
          <div className='header-title'>
                <Link href="/" className='title'>JOHN CONSULTING</Link>
          </div>
          <div className={`right-header ${mobileActive ? "active":""}`}>
             <div className='right-navigator'>
               <Navigator mobileActive={mobileActive} setMobileActive={setMobileActive}/>
             </div>
 
             <div className='login-bar'>
                <FaUserCircle size={28} color='white' className='user-icon'/>
                    <p className='login-text'>Log In</p>
             </div>
          </div>
          <div className='mobile-menu' onClick={()=>setMobileActive(!mobileActive)}>
                {mobileActive ? <AiOutlineClose />:<AiOutlineMenu/>}
          </div>
          
    </header>
  )
}
