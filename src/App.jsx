import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import DashHome from "./components/Dashboard/DashHome";
import AddHouse from "./components/People/AddHouse";
import AllPeople from "./components/People/AllPeople";
import Houses from "./components/People/Houses";
import Settings from "./components/Settings/Settings";
import Staff from "./components/Staff/Staff";
import AddStaff from "./components/Staff/AddStaff";
import Divisions from "./components/Divisions/Divisions";
import AddDivision from "./components/Settings/AddDivision";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp /> } />
        <Route path="/Dashboard/" element={<PrivateRoute ProtectRoute={<Dashboard /> }/> } >
          <Route path="Home" element={<PrivateRoute ProtectRoute={<DashHome /> } /> } />
          <Route path="People" element={<PrivateRoute ProtectRoute={<AllPeople /> } /> } />
          <Route path="AddHouse" element={<PrivateRoute ProtectRoute={<AddHouse /> } /> } /> 
          <Route path="Houses" element={<PrivateRoute ProtectRoute={<Houses /> } /> } />     
          <Route path="Settings" element={<PrivateRoute ProtectRoute={<Settings /> } /> } />        
          <Route path="Staff" element={<PrivateRoute ProtectRoute={<Staff /> } /> } />    
          <Route path="AddStaff" element={<PrivateRoute ProtectRoute={<AddStaff /> } /> } />
          <Route path="Divisions" element={<PrivateRoute ProtectRoute={<Divisions /> } /> } />        
          <Route path="AddDivision" element={<PrivateRoute ProtectRoute={<AddDivision /> } /> } />         
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}