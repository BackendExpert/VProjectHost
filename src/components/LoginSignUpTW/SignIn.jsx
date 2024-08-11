import React, { useState } from 'react'
import { BsMortarboardFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import  secureLocalStorage  from  "react-secure-storage";
import LoginImg from '../../assets/LoginImg.jpg'

const SignIn = () => {
    const navigate = useNavigate()
    // for login data
    const [LoginData, SetLoginData] = useState({
        email: '',
        password: ''
    })

    // send data to backend using axios
    const headleSubmit = async (e) => {
        e.preventDefault();

        // login to system

        try{
            const res = await axios.post('http://localhost:5000/auth/SignIn', LoginData)
            .then(res => {
                if(res.data.Status === "Success"){
                    alert("Login Successfull")
                    localStorage.setItem('token', res.data.Token)
                    secureLocalStorage.setItem('Login1', res.data.Result.email)
                    secureLocalStorage.setItem('Login2', res.data.Result.Role)  

                    navigate('/Dashboard/Home')
                    // login user Email 
                  
                }
                else{
                    alert(res.data.Error)
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }
  return (
    <div className='bg-gray-200 md:min-h-screen h-auto px-8 md:py-16 py-8'>
        <div className="bg-white md:mx-[15%] md:py-12 py-2 md:px-16 px-6 rounded shadow-md h-auto">
            <div className="md:grid grid-cols-2 gap-3">
                <div className="md:my-0 my-8">
                    <center><img src={LoginImg} alt="" className='md:h-80 h-40'/></center>
                    <div className="text-center">
                        <h1 className="text-xl font-semibold text-pink-500">Welcome to V Project</h1>
                        <h1 className="">SignIn Here</h1>
                    </div>
                </div>
                <div className="md:my-0 my-8">
                <h1 className='md:block hidden text-xl text-center mb-4 text-blue-500 font-semibold'>SignIn</h1>
                <div className="my-12">
                        <form onSubmit={headleSubmit}>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Email : </label>
                                <input type="email" name="" id="" className="my-2 w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Email Address'
                                onChange={e => SetLoginData({...LoginData, email:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <label htmlFor="" className=''>Password : </label>
                                <input type="password" name="" id="" className="my-2 w-full h-12 pl-2 rounded bg-gray-200" required placeholder='Enter Password' 
                                onChange={e => SetLoginData({...LoginData, password:e.target.value})}/>
                            </div>
                            <div className="my-2 md:mx-8">
                                <button type='submit' className='mt-2 font-semibold w-full py-4 px-8 rounded bg-blue-500 text-white shadow-md duration-500 hover:bg-blue-600'>SignIn</button>
                            </div>
                        </form>
                        <Link><p className="my-2 md:mx-8 text-blue-500 font-semibold">Forget Password ? </p></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignIn