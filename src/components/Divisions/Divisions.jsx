import React from 'react'

const Divisions = () => {
  return (
    <div className='px-4 my-2'>
        <h1 className='text-blue-500 font-semibold text-xl'>Divisions</h1>

        <div className="bg-white rounded shadow-md mb-4">
          <div id="detailed-pricing" class="w-full overflow-x-auto">
                <div class="overflow-hidden ">
                    <div className="md:block hidden">
                        <div class="grid grid-cols-5 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <div class="flex items-center">Division No</div>
                            <div>Name</div>
                            <div>Division Admin</div>
                            <div>Poeple</div>
                            <div></div>
                        </div>
                    </div>
                    <div className="md:hidden block">
                        <div class="grid grid-cols-5 p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 gap-x-16 dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <div class="flex items-center">Division Info</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Divisions