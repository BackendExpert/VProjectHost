import React from 'react'
import { useNavigate } from 'react-router-dom'

const DashNav = () => {
    const navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        navigate('/')
        window.location.reload()
    }

  return (
    <div className='bg-white py-5 rounded px-4 shadow-md text-blue-500'>
        <div className="flex justify-between">
            <h1 className="font-semibold">V Project </h1>
            <div className="">
                <p className="text-red-500 cursor-pointer" onClick={logout}>Logout</p>
            </div>
        </div>
    </div>
  )
}

export default DashNav