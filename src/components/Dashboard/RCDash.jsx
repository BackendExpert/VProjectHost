import React from 'react'
import CountUp from 'react-countup'
import { BsBuildingsFill, BsHouse, BsPeople, BsPersonFillLock } from 'react-icons/bs'

const RCDash = () => {

    const DashBoardData = [
        {name: 'Divisons', value: <CountUp end={20}/>, icon: <BsBuildingsFill className='h-8 w-auto'/>, bgColor: 'bg-green-400'},
        {name: 'People', value: <CountUp end={20}/>, icon: <BsPeople className='h-8 w-auto'/>, bgColor: 'bg-orange-500'},
        {name: 'Houses', value: <CountUp end={20}/>, icon: <BsHouse className='h-8 w-auto'/>, bgColor: 'bg-blue-500'},
        {name: 'Staff', value: <CountUp end={20}/>, icon: <BsPersonFillLock className='h-8 w-auto'/>, bgColor: 'bg-yellow-500'},       
    ]
  return (
    <div className='px-4 my-2'>
        <h1 className='text-blue-500 font-semibold text-xl'>Dashboard</h1>         
        <div className="md:flex mt-4 mb-6">
            <div className="md:w-1/4 w-full bg-white rounded-xl shadow-md md:mr-4 p-8">
                <center><BsBuildingsFill className=' h-32 w-auto text-blue-500'/></center>
                <h1 className="text-center pt-2 text-xl font-semibold text-blue-500">Regional Council</h1>
                <hr className='mt-4'/>
                <table>
                    <tr>
                        <td>
                            <h1 className='my-2 font-semibold text-blue-500'>RC ID: </h1>
                        </td>
                        <div className="">
                            <h1 className='my-2 ml-4'>6444</h1>
                        </div>
                    </tr>
                    <tr>
                        <td>
                            <h1 className="my-2 font-semibold text-blue-500">RC Name: </h1>
                        </td>
                        <div className="">
                            <h1 className='my-2 ml-4'>Kandy</h1>
                        </div>
                    </tr>
                </table>
            </div>
            <div className="w-full md:grid grid-cols-3 gap-4 bg-white p-4 rounded shadow-md border-l-4 border-blue-500 md:my-0 my-4">
                {
                    DashBoardData.map((dashdata, index) => {
                        return (
                            <div className={`pl-4 py-6 rounded-xl shadow-md ${dashdata.bgColor} text-white md:my-0 my-4`} key={index}>


                                <div className="">
                                    <div className="">
                                        {dashdata.name}
                                    </div>
                                    <div className="flex justify-between mr-4">
                                        <h1 className="text-2xl">{dashdata.value}</h1>
                                        <div className="-mt-2">{dashdata.icon}</div>
                                    </div>
                                </div>

                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default RCDash