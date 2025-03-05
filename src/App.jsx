
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./view/Dashboard/Dashboard"
import AdminLayout from "./layout/AdminLayout"
import Patient from "./view/Patient/Patient"
import Report from "./view/Report/Report"
import Stock from "./view/Stock/Stock"
import Setting from "./view/Setting/Setting"
import SignIn from "./view/SignIn"
// import { Toaster } from "react-hot-toast"
function App() {
 return(
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/signin" element={<SignIn/>}></Route>
            <Route path="/" element={<AdminLayout/>}>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/patient" element={<Patient/>}></Route>
                <Route path="/stock" element={<Stock/>}></Route>
                <Route path="/report" element={<Report/>}></Route>
                <Route path="/setting" element={<Setting/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
    {/* <Toaster/> */}
  </>
 )
}

export default App
