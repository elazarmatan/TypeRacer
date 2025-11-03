import { useTimer } from "../context/timer.context";

interface props {
  text:string[]
}

function TextUser({text}:props) {
  const {counter,isRunning} = useTimer()
  return (
    <div id="text">
    {isRunning && text.map((word,index) => (<p key={word} className={counter >= index ? 'word-input':''}>{word}</p>))}
    </div>
  );
}

export default TextUser;
