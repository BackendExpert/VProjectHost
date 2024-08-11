import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStaff = () => {
    const navigate = useNavigate()

    const [StaffData, SetStaffData] = useState({
        staffName: '',
        email: '',
        Position: ''
    })

    const headleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post(`http://localhost:5000/staff/AddStaff`, StaffData)
        .then(res => {
            if(res.data.Status === "Success"){
                alert("Staff Member Added Successfull")
                window.location.reload()          
            }
            else{
                alert(res.data.Error)
            }
        })
    }

  return (
    <div className='px-4 my-2'>
        <h1 className='text-blue-500 font-semibold text-xl'>Add New Staff</h1>   
        <a href="Staff">
            <button className="py-2 px-4 my-4 bg-blue-500 text-white rounded duration-500 hover:bg-blue-600">Back</button>
        </a>

        <div className="bg-white py-8 rounded shadow-md mb-4 px-4">
            <form method='post' onSubmit={headleSubmit}>
                <div className="md:grid grid-cols-2 gap-2">
                    <div className="">
                        <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Staff Name' 
                        onChange={e => SetStaffData({...StaffData, staffName:e.target.value })}/>
                    </div>
                    <div className="">
                        <input type="email" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Staff Email' 
                        onChange={e => SetStaffData({...StaffData, email:e.target.value })}/>
                    </div>
                    <div className="">
                        <select name="" id="" className='h-12 w-full rounded bg-gray-200 pl-2'
                        onChange={e => SetStaffData({...StaffData, Position:e.target.value })}>
                            <option value="">Select Position</option>
                            <option value="SuperAdmin">SuperAdmin (RC)</option>
                            <option value="DivisionAdmin">DivisionAdmin (Grama)</option>
                        </select>
                    </div>
                </div>

                <input type="submit" value="Add Staff" className="my-2 rounded bg-blue-500 py-2 px-4 text-white duration-500 hover:bg-blue-600" />
            </form>
        </div>
    </div>
  )
}

export default AddStaff