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
  e,
  inputRef,
  counter,
  text,
  setIsRunning,
  setCounter,
  setCorrect,
}: params) {
  if (e.key === " ") {
    e.preventDefault()
    if (inputRef.current && inputRef.current.value.trim() === text[counter]) {
      if (text.length - 1 === counter) setIsRunning(false);
      setCounter(counter + 1);
      setCorrect(true);
      inputRef.current.value = "";
    } else {
      e.preventDefault();
      setCorrect(false);
    }
  }
}