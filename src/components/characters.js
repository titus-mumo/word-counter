import React from 'react'

export const Characters = ({str}) => {
  return (
    <div>
        <p className='bg bg-violet-800 font-semibold text-lg text-white p-1 rounded-lg'>Characters: {str.length}</p>
    </div>
  )
}
