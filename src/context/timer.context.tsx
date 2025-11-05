import { createContext , useContext, useState} from "react";

type TimerContextType = {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  isRunning: boolean;
  setIsRunning: React.Dispatch<React.SetStateAction<boolean>>;
  counter:number
  setCounter:React.Dispatch<React.SetStateAction<number>>;
  setSaveRecord: React.Dispatch<React.SetStateAction<boolean>>;
  saveRecord:boolean
};

interface ThemeProviderProps {
      children: React.ReactNode;
    }



export const context = createContext<TimerContextType | null>(null)

export function TimerProvider(props:ThemeProviderProps){
    const [time,setTime] = useState(0)
    const [isRunning,setIsRunning] = useState(false)
    const [counter,setCounter] = useState(0)
    const [saveRecord,setSaveRecord] = useState(false)
    

    return <context.Provider value={{time,setTime,isRunning,setIsRunning,counter,setCounter,saveRecord,setSaveRecord}}>{props.children}</context.Provider>
}

export function useTimer() {
  const timer = useContext(context);
  if (!timer) throw new Error("useTimer must be used within a TimerProvider");
  return timer;
}