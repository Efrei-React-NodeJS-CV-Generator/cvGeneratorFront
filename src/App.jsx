import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from "./Components/Navigation/Header";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row h-100">
          <Header />
        </div>
      </div>
    </>
  )
}

export default App
