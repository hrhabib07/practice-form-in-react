import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SubmitForm from './Components/SubmitForm/SubmitForm'
import SatefulForm from './Components/SatefulForm/SatefulForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <h1>Vite + React</h1>
     {/* <SubmitForm></SubmitForm> */}
     <SatefulForm></SatefulForm>
    </>
  )
}

export default App
