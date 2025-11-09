import { useMyContext } from "../context/timer.context";

interface props {
  text:string[]
}

function TextUser({text}:props) {
  const {counter,isRunning} = useMyContext()
  return (
   <div id="text">
    {isRunning && text.map((word,index) => (<p key={word + index} className={counter === index ? 'word-specific':'words'}>{word}</p>))}
    </div>
  );
}

export default TextUser;
