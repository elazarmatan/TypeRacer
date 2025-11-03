import { useEffect, useRef } from "react";

interface props {
  counter: number;
  time: number;
}

function RecordSetting({ counter, time }: props) {
  const inputName = useRef<HTMLInputElement | null>(null);
  const record = ((counter + 1) / time) * 60;
  useEffect(() => {
    inputName.current?.focus();
  }),
    [];
  return (
    <div id="record">
      <label htmlFor="name">
        Enter your name if you want to keep the record.
      </label>
      <input
        type="text"
        id="name"
        ref={inputName}
        placeholder="enter your name"
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
          if (inputName.current?.value.trim()) {
            if (e.key === "Enter") {
              console.log(`name:${inputName.current?.value}`);
            }
          }
        }}
      />
      <p>Your pace is {record} words per minute.</p>
    </div>
  );
}

export default RecordSetting;
