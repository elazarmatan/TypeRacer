import InputText from "./InputText"
import Leaderboard from "./leaderboard"
import TextUser from "./TextUser"
import Timer from "./Timer"

function MainPage() {
  const texta = ['Lorem' ,'ipsum', 'dolor', 'sit', 'amet']
  const text = ['Lorem' ,'ipsum']
  return (
    <>
    <Timer/>
    <TextUser text={text}/>
    <InputText text={text}/>
    <Leaderboard/>
    </>
  )
}

export default MainPage