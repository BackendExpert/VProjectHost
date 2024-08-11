import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CountUp from 'react-countup'
import { Bs0Circle, BsBuilding, BsBuildingFill, BsPinMap, BsThermometerSun } from 'react-icons/bs';
import BarChart from './BarChart';
import DashboardDivision from './DashboardDivision';
import  secureLocalStorage  from  "react-secure-storage"
import RCDash from './RCDash';

const DashHome = () => {

    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");


    if(RoleUser === "SuperAdmin"){
        return (
            <RCDash />
        )
    }
    else if(RoleUser === "DivisionAdmin"){
        return(
            <DashboardDivision />
        )
    }
}

export default DashHome