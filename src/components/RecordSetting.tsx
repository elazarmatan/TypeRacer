import { useEffect, useRef, useState } from "react";
import keepLeaderboard from "../utils/keepLeaderboard";
import { useTimer } from "../context/timer.context";

interface props {
  counter: number;
  time: number;
}

function RecordSetting({ counter, time }: props) {
    const {setSaveRecord} = useTimer()
  const inputName = useRef<HTMLInputElement | null>(null);
  const record = ((counter) / time) * 60;
  const [enterName, setEnterName] = useState(false);
  useEffect(() => {
    inputName.current?.focus();
  }, []);
  return (
    <div>
      {!enterName && (
        <div id="record">
          <label htmlFor="name">
            Enter your name if you want to keep the record.
           </label><input
            type="text"
            id="name"
            ref={inputName}
            placeholder="enter your name"
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if(e.key === ' '){
                 e.preventDefault()
                return;
            }
              if (inputName.current?.value.trim()) {
                if (e.key === "Enter") {
                  keepLeaderboard(record, inputName.current.value);
                  setEnterName(true);
                  setSaveRecord(prev => !prev)
                }
              }
            }}
          />
        </div>
      )}
      <p>Your pace is {record} words per minute.</p>
    </div>
  );
}

export default RecordSetting;
