import { Route, Routes } from "react-router-dom"
import Header from './Navigation/Header'
import Index from './Pages/Index'
import Register from './Pages/Register'
import Login from "./Pages/Login"
import Profile from "./Pages/User/Profile"
import EditProfile from "./Pages/User/EditProfile"
import ShowMyCv from "./Pages/Cv/ShowMyCv"
import MyCvViewModeEnum from "./Enum/MyCvViewModeEnum"
import ShowCv from "./Pages/Cv/ShowCv"
import CvIndex from "./Pages/Cv/CvIndex"
import '../public/Asset/Style/style.css';

function App() {

  return (
    <>
      <div className="container-fluid vh-100 bg-dark">
        <div className="row">
          <Header />
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />


          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/profile/edit"} element={<EditProfile />} />

          <Route path={"/cv"} element={<CvIndex />} />
          <Route path={"/my-cv"} element={<ShowMyCv mode={MyCvViewModeEnum.VIEW} />} />
          <Route path={"/cv/edit"} element={<ShowMyCv mode={MyCvViewModeEnum.EDIT} />} />
          <Route path={"/cv/create"} element={<ShowMyCv mode={MyCvViewModeEnum.CREATE} />} />
          <Route path={"/cv/:cvId"} element={<ShowCv />} />


        </Routes>
      </div>
    </>
  )
}

export default App
