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
    <h1>{time}</h1>
    </div>
  )
}

export default Timer