
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./view/Dashboard/Create/Dashboard"
import AdminLayout from "./layout/AdminLayout"
import Patient from "./view/Patient/Patient"
import Report from "./view/Report/Report"
import Stock from "./view/Stock/Stock"
import Setting from "./view/Setting/Setting"
import SignIn from "./view/SignIn"
import { Toaster } from "react-hot-toast"
import CreateLayout from "./layout/Create_New_Patient"
import Information_Patient from "./view/Patient/Create/Information_Patient"


function App() {
 return(
  <>
    <BrowserRouter>
        <Routes>

            {/* SignIN */}
            <Route path="/signin" element={<SignIn/>}></Route>
            {/* Dashboard */}
            <Route path="/" element={<AdminLayout/>}>

                <Route path="/" element={<Dashboard/>}></Route>
            {/* Create */}
                <Route path="/create" element={<CreateLayout/>}></Route>
                <Route path="/create/information" element={<Information_Patient/>}></Route>
            {/* Patient */}
                <Route path="/patient" element={<Patient/>}></Route>
            {/* Stock */}
                <Route path="/stock" element={<Stock/>}></Route>
            {/* Report */}
                <Route path="/report" element={<Report/>}></Route>
            {/* Setting */}
                <Route path="/setting" element={<Setting/>}></Route>

            </Route>
        </Routes>
    </BrowserRouter>
    <Toaster/>
  </>
 )
}

export default App
