import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"
import { BsBackpack, BsBagCheck, BsBriefcase, BsBuildingsFill, BsClipboard2Data, BsGearFill, BsList, BsPeople, BsPersonFillLock, BsPersonGear, BsSpeedometer2, BsUiChecks, BsX } from "react-icons/bs";
import axios from 'axios';
import DashNav from './DashNav' 
import DashboardDivision from './DashboardDivision';

const DashSide = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };

    const SideMenu = [
        {id: 1, name: "Regional Council", link: 'RCHome', icon: <BsSpeedometer2 />},
        {id: 2, name: "Division Dashboard", link: 'DivisionHome', icon: <BsSpeedometer2 />},        
        {id: 3, name: "Divisions", link: 'Divisions', icon: <BsBuildingsFill />},   
        {id: 4, name: "People", link: 'People', icon: <BsPeople />}, 
        {id: 5, name: "Staff", link: 'Staff', icon: <BsPersonFillLock />}, 
        {id: 6, name: "Settings", link: 'Settings', icon: <BsGearFill />},    
    ]
    
  return (
    <div className=''>
        <button className="md:hidden fixed top-4 right-4 z-50 bg-blue-600 text-white p-2 rounded font-semibold" onClick={toggleSidebar}>
            {
                !isOpen ? <BsList /> : <BsX />
            }
        </button>

        <div className={`rounded shadow-md md:mt-4 py-4 px-4 md:min-w-64 md:max-w-64 bg-white w-full md:w-auto md:min-h-auto md:relative fixed overflow-auto top-0 left-0 h-full w-auto transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out`}>
            <div className="">
                <div className="text-center text-blue-500">

                    <h1 className='mt-4 font-semibold text-xl'>Division Name</h1>
                    <p className="text-sm">Division Number</p>

                </div>
                <hr className='my-2 border border-blue-300'/>

                <div className="">
                    {
                        SideMenu.map((menu, index) => {
                            return (
                                <a href={menu.link}>
                                    <div className="duration-500 py-2 hover:bg-blue-200  my-2 pl-4 rounded text-blue-500" key={index}>
                                        <div className="flex duration-500 hover:pl-2">
                                            <div className="text-xl pr-2">{menu.icon}</div>
                                            <p className="">{menu.name}</p>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default DashSide