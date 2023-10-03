import React from 'react'

export const Input = ({str, setStr}) => {
  return (
    <div>
        <textarea value={str} onChange={(e) => setStr(e.target.value)} className='border border-gray-500 w-full h-60 mr-3 mb-5 rounded-md active:border-gray-700' placeholder='Type or paste text'>

        </textarea>
    </div>
  )
}
