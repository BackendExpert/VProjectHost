import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Staff = () => {

    const [AllStaff, SetAllStaff] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5000/staff/AllStaff`)
        .then(res => SetAllStaff(res.data.Result))
        .catch(err => console.log(err))
    }, [])

  return (
    <div className='px-4 my-2'>
        <h1 className='text-blue-500 font-semibold text-xl'>Staff</h1>   
        <a href="AddStaff">
            <button className="py-2 px-4 my-4 bg-blue-500 text-white rounded duration-500 hover:bg-blue-600">Add New Staff</button>
        </a>

        <div className="bg-white">
            

            <div id="detailed-pricing" class="w-full overflow-x-auto">
                <div class="overflow-hidden ">
                    <div className="md:block hidden">
                        <div class="grid grid-cols-5 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <div class="flex items-center">Staff Name</div>
                            <div>Email</div>
                            <div>Position</div>
                            <div>Area</div>
                            <div></div>
                        </div>
                    </div>
                    <div className="md:hidden block">
                        <div class="grid grid-cols-5 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <div class="flex items-center">Staff Info</div>
                        </div>
                    </div>
                                <div class="md:grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">   
                                        <p className="text-blue-500 text-sm font-semibold">Edit User</p>                       
                                    </div>
                                </div>
                                <div class="md:grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">   
                                        <p className="text-blue-500 text-sm font-semibold">Edit User</p>                       
                                    </div>
                                </div>
                                <div class="md:grid grid-cols-5 px-4 py-5 text-sm text-gray-700 border-b border-gray-200 gap-x-16 dark:border-gray-700">
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">Testing</div>
                                    <div class="text-gray-500 dark:text-gray-400">   
                                        <p className="text-blue-500 text-sm font-semibold">Edit User</p>                       
                                    </div>
                                </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Staff