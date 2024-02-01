import React from 'react'
import Image from '../../components/Image/Image'
import Asset1 from '../../assets/png-for-dark-mode/Trendles-dark-icon.png'
import ClearIcon from '@mui/icons-material/Clear';
import Navicon from '../../components/NavIcon/Navicon';

const DropDownMenu = () => {
  return (
    <div>
    <div className="flex flex-col px-5 py-4 border-b-4 border-gray-800 rounded-lg border-x-4">
      <div className="flex items-end justify-between">
        <Image height={100} width={100} AssestIcon={Asset1} />
        <ClearIcon sx={{color:'white',fontSize:'3rem',cursor:'pointer'}} />
      </div>
      <span className='text-4xl font-bold text-center text-gray-200'>Qucik Menu</span>
      <div className="icons">
        <Navicon />
      </div>
      </div>
    </div>
  )
}

export default DropDownMenu