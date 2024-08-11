import React from 'react'
import People from './People'

const Houses = () => {
  return (
    <div>
        <div className='py-4 px-4 my-2'>
            <h1 className='text-gray-500 text-xs'>{location.pathname}</h1>
            <h1 className='text-blue-500 font-semibold text-xl'>People</h1>

            <People />
        </div>
    </div>
  )
}

export default Houses