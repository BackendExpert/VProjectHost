import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import DashFooter from './DashFooter';
import DashNav from './DashNav';
import DashSide from './DashSide';
import { BsChatDotsFill, BsHeadset, BsXCircleFill } from 'react-icons/bs';
import DashDataNav from './DashDataNav';


const Dashboard = () => {

    const [chatOpen, SetchatOpen] = useState(false)

    const headleOpenChat = () => {
        SetchatOpen(true)
    }

    const ChatMenu = [
        {id: 1, name: 'How to Start a Company'},
        {id: 2, name: 'How Find a Job'},
        {id: 3, name: 'How to add Skills or Project'},
    ]

    const ChatMenuData = [
        {id: 1, name: 'Click Start Company button on Dashboard'},
        {id: 2, name: 'How Find a Job'},
        {id: 3, name: 'How to add Skills or Project'},
    ]

    const [MenuID, SetMenuID] = useState(0)
    const headleStartChat = (id) => {
        SetMenuID(id)
    }

    const headleCloseChat = () => {
        SetchatOpen(false)
        SetMenuID(0)
    }

    return (
        <div className=" w-full min-h-screen md:px-[5%] px-4 mt-2">                
        <div className="md:flex">
        <div className="circlePosition w-[990px] h-[700px] bg-blue-900 rounded-[100%] fixed  z-[-10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[600px]"></div>
             
            <div className="fixed max-h-screen">
                <div className="md:block hidden">
                <DashNav />
                </div>
                <DashSide />                        
            </div>
            <div className=" md:ml-2 w-full md:ml-[270px]">     
                <DashDataNav />
                <div className="mt-2">
                <Outlet />
                </div>                      
                
                <button className="fixed bottom-2 right-8 p-3">
                    {
                        chatOpen === true ?
                            <BsXCircleFill className='h-8 w-auto text-blue-500' onClick={headleCloseChat}/>
                        :
                            <BsChatDotsFill className='h-8 w-auto text-blue-500' onClick={headleOpenChat}/>    
                    }

                    <div className={`md:max-w-[20%] max-w-[80%] fixed bottom-16 right-4 bg-blue-800 text-white p-6 rounded-lg transition-transform duration-300 ${chatOpen ? 'transform translate-x-0' : 'transform translate-x-full mr-[-20px]'}`}>
                        <div className="">
                            <div className="pb-4 flex">
                                <BsHeadset className='pl-4 h-6 w-auto'/>
                                <h1 className="pl-2">Help Assistant</h1>
                            </div>
                        </div>
                        <div className="text-blue-500 rounded shadow-md">
                            <div className="">
                                {
                                    ChatMenu.map((menuChat, index) => {
                                        return (
                                            <div className="bg-blue-400 p-2 my-2 rounded w-full" key={index}>
                                                <p className="text-left text-white text-sm" onClick={() => headleStartChat(menuChat.id)}>{menuChat.name}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className="">
                                {
                                    ChatMenuData.map((data, index) => {
                                        if(MenuID === data.id){
                                            return (
                                                <div key={index} className="text-left bg-white text-sm mt-4 p-2 rounded shadow-md">
                                                    {data.name}
                                                </div>
                                            )
                                        }
                                    }) 
                                }
                            </div>
                        </div>
                    </div>
                    
                </button>
                <DashFooter />      
            </div>                    
        </div>                          
    </div>
)
}

export default Dashboard