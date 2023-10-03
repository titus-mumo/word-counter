import React from 'react'

export const Words = ({str}) => {
    const nospace = str.trim()
    const words = nospace.split(' ')
    let len = words.length
    if(nospace.length === 0){
        len = 0
    }
  return (
    <div className='bg bg-violet-800 font-semibold text-lg text-white p-1 rounded-lg'>Words:{len}</div>
  )
}
