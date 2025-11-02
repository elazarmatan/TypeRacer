import { useEffect } from "react"
import { useTimer } from "../context/timer.context"

function Timer() {
    const {time,setTime,isRunning,setIsRunning,setCounter}  = useTimer()
    useEffect(() => {
        let interval:number
        if(isRunning){
            interval = setInterval(() => {setTime(time + 1)},1000)
        }
        return () => clearInterval(interval)
    },[isRunning,time])
  return (
    <div id="timer">
    {!time ? <button onClick={() => {
        setIsRunning(true)
    }}>start</button>:
    <button onClick={e => {
        setIsRunning(true)
        setTime(0)
        setCounter(0)
    }}>start again</button>
    }
    <h1>{time}</h1>
    </div>
  )
}

export default Timer