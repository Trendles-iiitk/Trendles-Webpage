import React, { useEffect, useState } from 'react'
import Asset1 from '../../assets/png-for-dark-mode/Trendles-dark-icon.png'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Image from '../Image/Image';
import { capitalize } from '@mui/material';

const DropdownMenu = ({ isVisible, toggleVisibility, className }) => {
  return isVisible && (
    <>
      <div className="absolute w-full h-5"></div>
      <ul className='absolute z-10 flex flex-col gap-2 px-2 py-2 text-lg font-normal bg-gray-700 border border-gray-700 shadow-lg bg-opacity-40 backdrop-filter md:gap-5 md:py-5 md:text-2xl left-5 top-12 backdrop-blur md:px-9 rounded-3xl'>
        {['photo', 'video', 'design', 'literary'].map((route,index) => (
          <li key={index} onClick={toggleVisibility} className={className}>
            <Link to={`/${route}`}>{capitalize(route)}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const Navbar = () => {
  const YellowEffect = 'transition-colors duration-100 cursor-pointer hover:text-yellow-500'
  const [isDropdownVisible,SetDropdownVisible] = useState(false)
  const [isWidhtLess,setWidth] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const toggleDropdown = () =>{
      SetDropdownVisible(!isDropdownVisible)
  }
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    if(windowWidth <= 768){
      setWidth(true)
    } else {
      setWidth(false)
  }
    return () => window.removeEventListener('resize', handleResize);
  }, [isWidhtLess, windowWidth]); 
  return ( isWidhtLess ? (
  <div className='flex items-start justify-between px-2 py-6'>
    <Image AssestIcon={Asset1} height={100} width={100}  />
    <div className="">
      <MenuIcon sx={{color:'white',fontSize:'2.5rem',cursor:'pointer'}} />
    </div>
  </div>
  ):(
  <div className='flex items-start justify-between px-10 py-6'>
      <Image height={120} width={120}  AssestIcon={Asset1}  />
      <ul className='flex items-center text-2xl font-semibold text-white gap-14'>
        <li className={YellowEffect}><Link to={'/magazine'}>Magazine</Link></li>
        <li className={YellowEffect}><Link to={'/contact'}>People</Link></li>
        <li onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown} className='relative' ><div className="flex items-center gap-1 cursor-pointer">Clubs <ArrowDropDownIcon  sx={{fontSize:'2rem'}} /></div>
        <DropdownMenu isVisible={isDropdownVisible} toggleVisibility={toggleDropdown} className={YellowEffect} />
        </li>
        <li className={YellowEffect}><Link to={'/events'}>Events</Link></li>
      </ul>
    </div>
    )
  )
}

export default Navbar