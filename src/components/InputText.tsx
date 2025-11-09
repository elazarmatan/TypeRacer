import React, { useRef, useEffect } from "react";
import { useMyContext } from "../context/timer.context";
import RecordSetting from "./RecordSetting";
import inputText from "../utils/inputText";

interface props {
  text: string[];
}

function InputText({ text }: props) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isRunning, counter, setCounter, time, setIsRunning,correct,setCorrect } = useMyContext();
  if (isRunning) inputRef.current?.focus();
  useEffect(() => {
    if (!time && inputRef.current) {
      inputRef.current.value = "";
    }
  }, [time]);
  if (text.length === counter)
    return <RecordSetting counter={counter} time={time} />;
  return (
    <div id="inputText">
      <input
        type="text"
        placeholder={isRunning ? "write text" : "press on button start"}
        ref={inputRef}
        disabled={isRunning ? false:true}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          inputText({
            isRunning,
            e,
            inputRef,
            counter,
            text,
            setIsRunning,
            setCounter,
            setCorrect,
          })
        }
      />
      {!correct && <p id="incorect">incorect try again!</p>}
    </div>
  );
}

export default InputText;
