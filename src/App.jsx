import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/LoginSignUpTW/SignIn";
import SignUp from "./components/LoginSignUpTW/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import DashHome from "./components/Dashboard/DashHome";
import AddHouse from "./components/People/AddHouse";
import AllPeople from "./components/People/AllPeople";
import Houses from "./components/People/Houses";
import Settings from "./components/Settings/Settings";
import Staff from "./components/Staff/Staff";
import AddStaff from "./components/Staff/AddStaff";
import Divisions from "./components/Divisions/Divisions";
import AddDivision from "./components/Settings/AddDivision";
import RCDash from "./components/Dashboard/RCDash";
import DashboardDivision from "./components/Dashboard/DashboardDivision";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp /> } />
        <Route path="/Dashboard/" element={<Dashboard />} >
          <Route path="RCHome" element={<RCDash /> } />
          <Route path="DivisionHome" element={<DashboardDivision /> } />
          <Route path="People" element={<AllPeople /> } /> 
          <Route path="AddHouse" element={<AddHouse /> } /> 
          <Route path="Houses" element={<Houses /> } />     
          <Route path="Settings" element={<Settings /> } />      
          <Route path="Staff" element={<Staff /> } />    
          <Route path="AddStaff" element={<AddStaff /> } /> 
          <Route path="Divisions" element={<Divisions /> } />         
          <Route path="AddDivision" element={<AddDivision /> } />     
        </Route>
      </Routes> 
    </BrowserRouter>
  )
}