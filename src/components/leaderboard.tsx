import { useTimer } from "../context/timer.context"
import getLeaderboard from "../utils/getLeaderBoard"

function Leaderboard() {
    const {saveRecord} = useTimer()
    const leaderboard = getLeaderboard()
    console.log(saveRecord)
  return (
    <div id="leader">
    <h1>Leaderboard</h1>
    <ul>
        {leaderboard.length && leaderboard.map((leader:{name:string,record:number},index:number)=>  index < 5 &&<li key={leader.name}>{leader.name}:{leader.record}</li>)}
    </ul>
    </div>
  )
}

export default Leaderboard