import React from 'react'
import Content from '../../components/Content/Content'
import IconDisplay from '../../components/IconDisplay/IconDisplay'
import Trendles1 from '../../assets/png-for-dark-mode/trendles-text.png'
import Trendles2 from '../../assets/png-for-dark-mode/Trendles-dark-text-alt.png'
import Trendles3 from '../../assets/png-for-dark-mode/Trendles-Dark-text.png'
import Image from '../../components/Image/Image'

const Landing = () => {
  return (
    <div className='flex flex-col gap-5 pt-8 overflow-hidden md:py-8 md:pl-12 md:gap-28'>
      <div className="relative flex flex-col items-center gap-5 text-center md:justify-start md:flex-row md:text-start">
        <Content Title={'TRENDLES'} content={'The Trendles Club organizes and promotes various personality building activities and provides enough avenues under multiple domains to students to facilitate the pursuit of their dreams. '} />
        <div className="m-5 md:absolute md:-right-36 md:-top-10">
          <IconDisplay />
        </div>
      </div>
      <div className='flex items-center justify-center text-center md:justify-start md:text-start'>
        <Content Title={'Discover Creativity'} content={'Embark on literary adventures, weeb out over your favourite mangas, shape eye-pleasing wonders, engage in mind boggling battles, journey through the cosmos, and so much more.'} />
      </div>
      <div className="relative flex flex-wrap items-center justify-center gap-8 text-center md:justify-between md:mr-10 md:text-start ">
        <Image AssestIcon={Trendles3} height={200} width={200} className={'md:-rotate-90'} />
        <Content Title={'Embrace the Spectrum'} content={'Whether your affinity is towards, words, the skies, design, brains, finance, or pictures, our cultural club awaits the distinctive touch of your contribution and we will be looking forward to it.'} />
        <Image AssestIcon={Trendles2} height={200} width={200} className={'md:-rotate-90  md:hidden'} />
      </div>
      <div className='flex flex-wrap items-center justify-center gap-8 text-center md:justify-between md:text-start'>
        <Content Title={'Connect and Thrive'} content={'Forge bonds, put forward ideas, and make lasting memories as you dive deep into the rich tapestry of this cultural mix. Welcome to a world with people having similar passions and let your creativity know no bounds!'} />
        <Image AssestIcon={Trendles1} height={200} width={200} className={'md:mr-16 md:rotate-90'} />
      </div>
    </div>
  )
}

export default Landing