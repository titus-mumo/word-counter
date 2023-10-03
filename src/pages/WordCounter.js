import { Input } from "../components/input"
import { Characters } from "../components/characters"
import { ClearButton } from "../components/clearButton"
import { Words } from "../components/words"
import { ChuckNorris } from "../components/ChuckNorris"
import { useState } from "react"

export const WordCounter = () => {
    const [str, setStr] = useState('')
  return (

    <main className="max-w-lg w-full h-full flex justify-center flex-col basis-11/12 m-3 p-3 rounded-lg border-2 border-gray-400 shadow">
        <div className="view">
            <Input str={str} setStr={setStr}/>
            <ClearButton str={str} setStr = {setStr}/>
            <div className="flex justify-between m-4">
                <Characters str={str}/>
                <Words str={str}/>
            </div>
        </div>
        <ChuckNorris />
    </main>
  )
}
