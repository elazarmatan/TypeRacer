import { useEffect,useState } from "react"
import { useMyContext } from "../context/timer.context"
import getLeaderboard from "../utils/getLeaderBoard"

function Leaderboard() {
    const {saveRecord} = useMyContext()
    const [leaderboard, setLeaderboard] = useState<{ name: string; record: number }[]>([]);
    useEffect(()=>{
        const data = getLeaderboard()
        setLeaderboard(data)
    },[saveRecord])
  return (
    <div id="leader">
    <h1 id="headLeder">Leaderboard</h1>
    <ol>
        {leaderboard.length && leaderboard.map((leader:{name:string,record:number},index:number)=>  index < 5 &&<li key={leader.name} id={index === 0 ? 'first':''}>{index + 1} . {leader.name} : {leader.record}</li>)}
    </ol>
    </div>
  )
}

export default Leaderboard