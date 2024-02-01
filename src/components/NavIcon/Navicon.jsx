import React from 'react'
import Image from '../Image/Image'
import Asset1 from '../../assets/png-for-dark-mode/Trendles-dark-icon.png'

const Navicon = () => {
  return (
    <div className="flex flex-col content-center gap-1 ">
    <div className="px-2 pt-4 pb-3 bg-gray-700 border border-gray-700 shadow-2xl bg-opacity-30 backdrop-blur-100 w-fit rounded-2xl"> 
      <Image AssestIcon={Asset1} height={75} width={50} />
    </div>
        <span className='font-semibold text-white'>Home</span>
    </div>
  ) 
}

export default Navicon