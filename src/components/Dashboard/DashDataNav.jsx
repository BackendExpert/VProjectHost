import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

const DashDataNav = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

  return (
    <div className='bg-white py-5 rounded px-4 shadow-md text-blue-500'>
        <div className="flex justify-between">
            <h1 className="font-semibold">
                {
                    (() => {
                        if(RoleUser === "SuperAdmin"){
                            return (
                                <h1 className="">SuperAdmin</h1>
                            )
                        }
                        if(RoleUser === "DivisionAdmin"){
                            return (
                                <h1 className="">Divison Admin</h1>
                            )
                        }
                    })()
                }
            </h1>
            <div className="">
                <p className="text-red-500 cursor-pointer">Logout</p>
            </div>
        </div>
    </div>
  )
}

export default DashDataNav