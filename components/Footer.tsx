import Image from 'next/image';
import Link from 'next/link';
import { footerLinks } from '@/constants';


const Footer = ()=>{
  return (
    <footer className='flex flex-col 
     text-black-100 mt-6 border-t border-gray-100'>
       <div className='flex max-md:flex-col
       flex-wrap justify-between gap-5 sm:px-16
       px-6 py-10'>
       <div className="flex flex-col items-start justify-start gap-6">
          <Image src="/logo.svg" alt='logo' width={118} height={18} className='object-contain'></Image>
          <p className='text-bese text-gray-700'>Carhub 2023 <br/>
          All rights reserved &copy;</p>
       </div>
       <div className="footer__links">
         {footerLinks.map((Link) => (
            <div key={Link.title}
            className="footer__link">
               <h3>{Link.title}</h3>
               {Link.links.map((item) => (
                 <a
                  key={item.title}
                  href={item.url}
                  className='text-gray-500'
                 >
                    {item.title}
                 </a>
               ))}
            </div>
         ))}
       </div>
       </div>
       <div className="grid sm:flex sm:flex-wrap 
       item-center justify-between mt-10
       border-t border-gray-100 sm:px-16 px-6 py-10">
          <p className='text-sm '>@2023 CarHub. All Rights Reserved</p>
          <div className="footer__copyrights-link text-sm">
               <a href="/" className='text-gray-500'>
                Privacy Policy
               </a>
               <a href="/" className='text-gray-500'>
                Terms of Use
               </a>
          </div>
       </div>
    </footer>
  )
}

export default Footer;
