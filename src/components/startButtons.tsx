import { useTimer } from "../context/timer.context"

function StartButtons() {
    const {setIsRunning,setTime,setCounter,isRunning} = useTimer()
  return (
    <div id="buttons">
    {!isRunning ? <button onClick={() => {
        setIsRunning(true)
    }}>start</button>:
    <button onClick={() => {
        setIsRunning(true)
        setTime(0)
        setCounter(0)
    }}>start again</button>
    }
    {isRunning && <button onClick={() => {
        setIsRunning(false)
        setTime(0)
        setCounter(0)
    }}>reset</button>}
    </div>
  )
}

export default StartButtons