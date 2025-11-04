interface params {
  isRunning: boolean;
  e: React.KeyboardEvent<HTMLInputElement>;
  inputRef: React.RefObject<HTMLInputElement | null>;
  counter: number;
  text: string[];
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  setCorrect: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function inputText({
  isRunning,
  e,
  inputRef,
  counter,
  text,
  setIsRunning,
  setCounter,
  setCorrect,
}: params) {
  if (!isRunning) e.preventDefault();
  if (e.key === " ") {
    const userText = inputRef.current?.value.split(" ");

    if (userText && userText[counter] === text[counter]) {
      if (text.length - 1 === counter) setIsRunning(false);
      setCounter(counter + 1);
      setCorrect(true);
    } else {
      e.preventDefault();
      setCorrect(false);
    }
  }
}
