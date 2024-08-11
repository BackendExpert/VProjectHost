import React from 'react'
import CountUp from 'react-countup'
import { Bs0Circle, BsHouse, BsHouseAdd, BsPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import  secureLocalStorage  from  "react-secure-storage"

const People = () => {
    const navigate = useNavigate()
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const PeopleData = [
        {id: 1, name: 'People', link: 'People', icon: <BsPerson className='h-8 w-auto'/>, value: <CountUp end={200} />, BgColor: 'bg-blue-500'},
        {id: 2, name: 'House', link: 'Houses', icon: <BsHouse className='h-8 w-auto'/>, value: <CountUp end={200} />, BgColor: 'bg-purple-500'},
        {id: 3, name: 'Add House', link: 'AddHouse', icon: <BsHouseAdd className='h-8 w-auto'/>, value: "#" , BgColor: 'bg-green-500'},
    ]

  return (
    <div className=''>
        <div className="bg-white px-4 py-6 rounded shadow-md my-2">
            <div className="md:grid grid-cols-3 gap-5">
                {
                    PeopleData.map((people, index) => {
                        return (
                            <a href={people.link}>
                            <div className={`pl-4 py-6 rounded-xl shadow-md ${people.BgColor} text-white md:my-0 my-4`} key={index}>


                            <div className="">
                                <div className="">
                                    {people.name}
                                </div>
                                <div className="flex justify-between mr-4">
                                    <h1 className="text-2xl">{people.value}</h1>
                                    <div className="-mt-2">{people.icon}</div>
                                </div>
                            </div>


                            </div>
                        </a>
                    )
                        
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default People