import Layout from "./components/Layout"
import { TimerProvider } from "./context/timer.context"

function App() {
  return (
    <>
    <TimerProvider>
    <Layout/>
    </TimerProvider>
    </>
  )
}

export default App