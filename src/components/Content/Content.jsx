import React from 'react'

const Content = ({Title,content}) => {
  return (
    <div className='flex flex-col items-center gap-6 px-7 md:px-0 md:w-2/5 md:items-start'>
        <h1 className='text-3xl font-semibold text-white transform scale-y-125 font-Rubik md:text-4xl'>{Title}</h1>
        <p className='text-lg font-normal text-white md:text-xl md:font-medium'>
          {content}
        </p>
    </div>
  )
}

export default Content