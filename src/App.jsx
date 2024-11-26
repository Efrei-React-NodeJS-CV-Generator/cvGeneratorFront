import { Route, Routes } from "react-router-dom"
import Header from './Navigation/Header'
import Index from './Pages/Index'
import Register from './Pages/Register'
import Login from "./Pages/Login"

function App() {

  return (
    <>
      <div className="container-fluid vh-100">
        <div className="row">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" eLement={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App
