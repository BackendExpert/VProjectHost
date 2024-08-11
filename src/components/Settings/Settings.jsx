import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import  secureLocalStorage  from  "react-secure-storage"

const Settings = () => {
    const navigate = useNavigate()

    //curent login user
    const EmailUser = secureLocalStorage.getItem("Login1");
    const RoleUser = secureLocalStorage.getItem("Login2");

    const [UpdatePass, SetUpdatePass] = useState({
      oldPass: '',
      newPass: ''
    })

    const headelUpdatePassword = async (e) => {
      e.preventDefault();

      const res = await axios.post(`http://localhost:5000/Settings/UpdatePassword/${EmailUser}`, UpdatePass)
      .then(res => {
        if(res.data.Status === "Success"){
          alert("Password Updated Successfull")
          localStorage.clear()
          window.location.reload()
        }
        else{
          alert(res.data.Error)
        }
      })
    }

    const [UpdateDashboard, SetUpdateDashboard] = useState({
      diviName: '',
      diviNumber: '',
    })

    const headelUpdateDashboard = async (e) => {
      e.preventDefault();

      const res = await axios.post(`http://localhost:5000/Settings/UpdatePassword/${EmailUser}`, UpdatePass)
      .then(res => {
        if(res.data.Status === "Success"){
          alert("Password Updated Successfull")
          localStorage.clear()
          window.location.reload()
        }
        else{
          alert(res.data.Error)
        }
      })
    }
    

  return (
    <div className='px-4 my-2'>
        <h1 className='text-blue-500 font-semibold text-xl'>Settings</h1>
        <div className="md:flex">
          {
            (() => {
              if(RoleUser === "DivisionAdmin"){
                return (
                  <div className="w-full my-2 py-4 bg-white shadow-md px-4 rounded md:ml-0 md:mr-4">
                    <h1 className="font-semibold text-blue-500">Update Dashboard</h1>
                    <hr className='mb-4'/>

                    <div className="">
                      <form onSubmit={headelUpdateDashboard} method="post">
                          <div className="md:grid grid-cols-2 gap-2">
                              <input type="text" name="" id="" className="w-full h-12 rounded bg-gray-200 pl-2 my-2" required placeholder='Division Name'
                              onChange={e => SetUpdateDashboard({...UpdateDashboard, diviName:e.target.value})}/>

                              <input type="text" name="" id="" className="w-full h-12 rounded bg-gray-200 pl-2 my-2" required placeholder='Division Number'
                              onChange={e => SetUpdateDashboard({...UpdateDashboard, diviNumber:e.target.value})}/>
                          </div>
                        <input type="submit" value="Update Dashboard" className="py-2 px-4 rounded bg-blue-500 text-white shadow-md" />
                      </form>
                    </div>
                  </div>
                )
              }
              else{
                return (
                  <div className="w-full my-2 py-4 bg-white shadow-md px-4 rounded md:ml-0 md:mr-4">
                    <h1 className="font-semibold text-blue-500">Testings</h1>
                    <hr className='mb-4'/>

                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos qui minus quae non mollitia ut itaque neque. Iste sit, aspernatur modi reiciendis deleniti adipisci consequatur laboriosam suscipit quos qui voluptates!
                  </div>
                )
              }
            })()
          }

          <div className="my-2 bg-white py-4 px-6 rounded shadow-md md:w-2/3">
            <h1 className="font-semibold text-blue-500">Update Password</h1>
            <hr className='mb-4'/>

            <div className="">
              <form onSubmit={headelUpdatePassword} method="post">
                <div className="">
                  <input type="password" name="" id="" className="w-full h-12 rounded bg-gray-200 pl-2 my-2" required placeholder='Enter Current Password '
                  onChange={e => SetUpdatePass({...UpdatePass, oldPass:e.target.value})}/>

                  <input type="password" name="" id="" className="w-full h-12 rounded bg-gray-200 pl-2 my-2" required placeholder='Enter New Password '
                  onChange={e => SetUpdatePass({...UpdatePass, newPass:e.target.value})}/>

                  <input type="submit" value="Update Password" className="py-2 px-4 rounded bg-blue-500 text-white shadow-md" />
                </div>
              </form>
            </div>
          </div>

        </div>

    </div>
  )
}

export default Settings