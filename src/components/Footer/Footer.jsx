import React from 'react'
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';
import Discord from '../../assets/Ping/discord-min.svg'


const Footer = () => {
  return (
    <div className='flex flex-col gap-5 pt-10 font-semibold text-white bg-black bg-opacity-30'>
      <div className="flex flex-col flex-wrap items-center justify-around gap-5 md:gap-0 md:flex-row">
        <div className="flex flex-col items-center gap-2">
          <div className='text-2xl'>Contact Us</div>
          <div className=''><PhoneEnabledIcon /> +91-82473-40743</div>
          <div className='tracking-wide '><EmailIcon /> trendles@iiitkottayam.ac.in</div>
        </div>
        <div className="flex flex-col items-center">
          <div className='text-2xl'>Social Media</div>
          <div className="flex flex-row gap-1">
            <Link to={'https://www.instagram.com/trendles_iiitk?igsh=M2l6bG02cDFzdmNp'} aria-label="Instagram"><InstagramIcon /></Link>
            <Link to={'https://twitter.com/'} aria-label="Twitter" ><XIcon /></Link>
            <Link to={'https://www.linkedin.com/company/trendles/'} aria-label="LinkedIn" ><LinkedInIcon /></Link>
            <Link to={'https://discord.com/invite/YBNyNg54'} aria-label="Discord" ><img src={Discord} alt='Discord' /></Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center word-spacing-1">
      Made with  <FavoriteIcon sx={{color:'red',margin:'0px 5px'}} />  by Trendles Club
      </div>
    </div>
  )
}

export default Footer