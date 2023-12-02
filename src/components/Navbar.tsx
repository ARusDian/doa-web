import React, {useEffect, useState} from 'react';
import {Link} from 'react-scroll';

//react icons
import { FaXmark, FaBars} from 'react-icons/fa6';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 100) {
        setIsSticky(true)
      }
      else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return() => {
      window.addEventListener('scroll', handleScroll);
    }
  })

  //nav items array
  const navItems = [
    {link: 'Home', path:"home"},
    {link: 'About', path:"about"},
    {link: 'Alquran', path:"alquran"},
    {link: 'Doa', path:"doa"},

  ];
  return (
    
    <header className='w-full md:bg-transparent '>
        <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : " " } `}>
          <div className='flex justify-between items-center text-base gap-8 mx-20'>
            <a ><span className='text-2xl font-bold  text-brandPrimary'>DOA & JUZ AMMA</span></a>

            {/* nav web */}
            <ul className='md:flex space-x-12 hidden'>
              {
                navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-grey900 hover:text-brandPrimary first:font-medium' > {link} </Link>)
              }
            </ul>

              <div className='md:hidden'>
                <button 
                onClick={toggleMenu}
                className=' text-neutralDGrey focus:outline-none focus:text-gray-500'>
                  {
                    isMenuOpen ? (<FaXmark className='h-6 w-6'/>):(<FaBars className='h-6 w-6'/>)
                  }
                </button>
              </div>
          </div>
          {/* nav items for mobile devices */}
          <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "blocked absolute z-20 top-0 right-0 left-0 " : "hidden"} `}>
              {
                navItems.map(({link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium' > {link} </Link>)
              }
          </div>

        </nav>
    </header>
  );
};

export default Navbar;