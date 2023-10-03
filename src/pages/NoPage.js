import React from 'react'
import {Link} from 'react-router-dom'

export const NoPage = () => {
  return (
    <main>
        <div className='h-full w-full flex flex-col justify-center align-middle'>
            <p>Ooop, Page Not Found</p>
            <Link to='/'>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Go to home page
                </span>
            </button>
            </Link>
        </div>   
    </main>
  )
}
