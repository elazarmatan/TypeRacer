import React, { useRef, useState, useEffect } from "react"
import { useTimer } from "../context/timer.context"
import RecordSetting from "./RecordSetting"

interface props{
    text:string[]
}

function InputText({text}:props) {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const {isRunning,counter,setCounter,time,setIsRunning} = useTimer()
  const [correct,setCorrect] = useState(true)
  if(isRunning) inputRef.current?.focus()
  useEffect(() => {
  if (!time && inputRef.current) {
    inputRef.current.value = '';
  }
}, [time]);
  if(text.length === counter)return <RecordSetting counter={counter} time={time}/>
  return (
    <div id="inputText">
    <input type="text" placeholder={isRunning ? 'write text':'press on button start'} ref={inputRef} onKeyDown={(e:React.KeyboardEvent<HTMLInputElement>) => {
        if(!isRunning) e.preventDefault()
        if(e.key === ' '){
            const userText = inputRef.current?.value.split(' ')
            if(userText && userText[counter] === text[counter]){
                if(text.length-1 === counter)setIsRunning(false)
                setCounter(counter +1)
                setCorrect(true)
            }
            else{
                setCorrect(false)
            }
        }
    }}/>
    {!correct && <p id="incorect">incorect try again!</p>}
    </div>
  )
}

export default InputText