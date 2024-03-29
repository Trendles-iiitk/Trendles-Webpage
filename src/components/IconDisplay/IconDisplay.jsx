import Image from '../Image/Image'
import Literaryicon from '../../assets/Ping/lit.png'
import Blogicon from '../../assets/Ping/blog.png'
import Twittericon from '../../assets/Ping/twitter.png'
import Videoicon from '../../assets/Ping/video.png'
import InstraIcon from '../../assets/Ping/Instragram.png'
import Trendles2 from '../../assets/png-for-dark-mode/Trendles-dark-text-alt.png'
import { useEffect, useState } from 'react'

const IconDisplay = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isWidhtLess,setWidth] = useState(false)
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
  return (
    <div className='flex flex-col'>
        <div className="flex justify-between h-28 md:h-28 w-custom md:w-96">
            <Image AssestIcon={Literaryicon}  height={(isWidhtLess)?60:80} width={(isWidhtLess)?70:80} subRoute={'/literary'} className={'flex transform w-44 -rotate-24 md:w-52 justify-end self-center'} />
            <Image AssestIcon={Blogicon} height={(isWidhtLess)?60:80} width={(isWidhtLess)?70:80} subRoute={'/blog'} className={'transform rotate-45 self-end'}  />
        </div>
        <div className="flex h-24 mt-8 gap-7 md:h-28">
            <Image AssestIcon={Videoicon} height={(isWidhtLess)?60:80} width={(isWidhtLess)?70:80} subRoute={'/video'} className={'flex transform -rotate-12 justify-start :self-center'} />
            <Image AssestIcon={Trendles2} height={(isWidhtLess)?150:200} width={(isWidhtLess)?150:200} subRoute='/'  className={'self-center pt-5 pl-2'} />
        </div>
        <div className="flex flex-row justify-between h-28 md:h-40 w-custom md:w-96">
            <Image AssestIcon={Twittericon} height={(isWidhtLess)?60:80} width={(isWidhtLess)?70:80} subRoute={'https://twitter.com/'} className={'flex w-36  md:w-48 self-end md:self-center justify-end -rotate-24'} />
            <Image AssestIcon={InstraIcon} height={(isWidhtLess)?60:70} width={(isWidhtLess)?60:70} subRoute={'https://www.instagram.com/trendles_iiitk?igsh=M2l6bG02cDFzdmNp'} className={'flex  self-start  rotate-45'} />
        </div>

    </div>
  )
}

export default IconDisplay