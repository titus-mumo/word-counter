import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export const ChuckNorris = () => {
    const [joke, setJoke] = useState('')
    const getJoke = async(e) =>{
        e.preventDefault()
        try {
            const response = await axios.get('https://api.chucknorris.io/jokes/random')
            setJoke(response.data.value.toString())
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

  return (
    <div>
        <button onClick={getJoke} className='bg-black text-white font-semibold text-md p-1 rounded-md'>
            Get a joke
        </button>
        <p>{joke}</p>
    </div>
  )
}
