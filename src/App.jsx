import { useState } from 'react'
import Header from './Navigation/Header'
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row">
          <Header />
        </div>

        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>



        
      </div>
    </>
  )
}

export default App
