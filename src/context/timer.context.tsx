import { createContext , useContext, useState} from "react";

type ContextType = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  counter:number
  setCounter:React.Dispatch<React.SetStateAction<number>>;
  setSaveRecord: React.Dispatch<React.SetStateAction<boolean>>;
  saveRecord:boolean
  correct:boolean
 setCorrect:React.Dispatch<React.SetStateAction<boolean>>;
};

interface ThemeProviderProps {
      children: React.ReactNode;
    }



export const context = createContext<ContextType | null>(null)

export function TimerProvider(props:ThemeProviderProps){
    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false)
    const [counter,setCounter] = useState(0)
    const [saveRecord,setSaveRecord] = useState(false)
    const [correct, setCorrect] = useState(true);
    

    return <context.Provider value={{time,setTime,isRunning,setIsRunning,counter,setCounter,saveRecord,setSaveRecord,correct,setCorrect}}>{props.children}</context.Provider>
}

export function useMyContext() {
  const timer = useContext(context);
  if (!timer) throw new Error("useTimer must be used within a TimerProvider");
  return timer;
}