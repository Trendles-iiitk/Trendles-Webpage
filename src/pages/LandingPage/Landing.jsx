import React from 'react'
import Content from '../../components/Content/Content'
import IconDisplay from '../../components/IconDisplay/IconDisplay'
import ImageSlideShow from '../../components/ImagesSlideShow/ImageSlideShow'
import { slide1, slide2, slide3 } from '../../data/Dummydata'

const Landing = () => {
  return (
    <div className='flex flex-col gap-20 pt-8 overflow-hidden md:py-8 md:gap-28'>
      <div className="relative flex flex-col items-center gap-5 text-center md:justify-around md:gap-0 md:items-center md:flex-row md:text-start">
        <Content Title={'TRENDLES'} content={'The Trendles Club organizes and promotes various personality building activities and provides enough avenues under multiple domains to students to facilitate the pursuit of their dreams. '} />
        <div className="m-5 md:m-0">
          <IconDisplay />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-around md:gap-0 md:text-start'>
        <Content Title={'Discover Creativity'} content={'Embark on literary adventures, weeb out over your favourite mangas, shape eye-pleasing wonders, engage in mind boggling battles, journey through the cosmos, and so much more.'} />
        <ImageSlideShow slides={slide1} />
      </div>
      <div className="relative flex flex-col-reverse items-center justify-center gap-8 text-center md:flex-row md:justify-around md:gap-0 md:text-start ">
      <ImageSlideShow slides={slide2} />
        <Content Title={'Embrace the Spectrum'} content={'Whether your affinity is towards, words, the skies, design, brains, finance, or pictures, our cultural club awaits the distinctive touch of your contribution and we will be looking forward to it.'} />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-around md:gap-0 md:text-start'>
        <Content Title={'Connect and Thrive'} content={'Forge bonds, put forward ideas, and make lasting memories as you dive deep into the rich tapestry of this cultural mix. Welcome to a world with people having similar passions and let your creativity know no bounds!'} />
        <ImageSlideShow slides={slide3} />
      </div>
    </div>
  )
}

export default Landing