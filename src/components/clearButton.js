import React from 'react'

export const ClearButton = ({str, setStr}) => {
    const arr = str.length
  return (
    <div>
        <span onClick={() =>setStr('')} className='bg px-3 py-1 text-lg font-semibold text-white rounded-lg m-4' style={arr === 0? {background: 'gray'}: {background:'red', cursor:'pointer'}}>Clear</span>
    </div>
  )
}
