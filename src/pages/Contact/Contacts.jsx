import React from 'react';
import ajay from '../../assets/TrendlesImages/Image4/aditya3.jpg'
import venkey from '../../assets/TrendlesImages/Image4/venkatesh-min.jpeg'
import atul from '../../assets/TrendlesImages/Image4/atul.jpg'
import John from '../../assets/TrendlesImages/Image4/John-min.jpeg'

const Contacts = () => {
   
    return (
        <div className='flex flex-col gap-16 mb-10 text-white'>
            <h1 className='self-center text-5xl font-bold font-Rubik'>Patrons</h1>
            <div className="flex flex-col flex-wrap gap-10 mt-5 md:gap-0 md:flex-row md:justify-evenly ">
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src={venkey} className='border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Dr. Venkatesh S</p>
                </div>
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src={John} className='border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Dr. John Paul Martin</p>
                </div>
            </div>
            <h1 className='self-center text-5xl font-bold font-Rubik'>Mentors</h1>
            <div className="flex flex-col flex-wrap gap-10 mt-5 md:gap-0 md:flex-row md:justify-evenly">
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src={ajay} className='object-contain border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Ajay Krishna</p>
                </div>
                <div className="flex flex-col flex-wrap items-center gap-5">
                    <img src={atul} className='object-contain border-4 border-white rounded-xl' height={100} width={200} alt='person' />
                    <p className='text-2xl font-semibold'>Atul Singh</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
