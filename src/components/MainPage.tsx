import InputText from "./InputText"
import Leaderboard from "./leaderboard"
import StartButtons from "./startButtons"
import TextUser from "./TextUser"
import Timer from "./Timer"

function MainPage() {
  const text = ['Lorem' ,'ipsum', 'dolor', 'sit', 'amet']
  return (
    <>
    <StartButtons/>
    <Timer/>
    <TextUser text={text}/>
    <InputText text={text}/>
    <Leaderboard/>
    </>
  )
}

export default MainPage