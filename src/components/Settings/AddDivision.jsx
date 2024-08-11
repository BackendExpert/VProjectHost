import React from 'react'

const AddDivision = () => {
    const headleSubmit = (e) => {
        e.preventDefault();


    }
  return (
    <div className='px-4 my-2'>
        <h1 className='text-blue-500 font-semibold text-xl'>Add Division</h1>   

        <div className="bg-white py-8 rounded shadow-md mb-4 px-4">
            <form onSubmit={headleSubmit} method="post">
                <div className="md:grid grid-cols-2 gap-2">
                    <div className="">
                        <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Divison Name' 
                        />
                    </div>
                    <div className="">
                        <input type="text" name="" id="" className="h-12 w-full rounded bg-gray-200 pl-2" required placeholder='Divison Name' 
                        />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddDivision