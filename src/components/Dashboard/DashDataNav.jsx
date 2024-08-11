import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const DashDataNav = () => {


  return (
    <div className='bg-white py-5 rounded px-4 shadow-md text-blue-500'>
        <div className="flex justify-between">
            <h1 className="font-semibold">
                <h1 className="">SuperAdmin</h1>
            </h1>
            <div className="">
                <p className="text-red-500 cursor-pointer">Logout</p>
            </div>
        </div>
    </div>
  )
}

export default DashDataNav