import { Route, Routes } from "react-router-dom"
import Header from './Navigation/Header'
import Index from './Pages/Index'
import Register from './Pages/Register'
import Login from "./Pages/Login"
import Profile from "./Pages/User/Profile"
import EditProfile from "./Pages/User/EditProfile"

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


          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/profile/edit"} element={<EditProfile />} />


        </Routes>
      </div>
    </>
  )
}

export default App
