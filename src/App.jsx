
import { BrowserRouter, Routes, Route } from "react-router"
import Dashboard from "./view/Dashboard/Dashboard"
import AdminLayout from "./layout/AdminLayout"
import Patient from "./view/Patient/Patient"
import Stock from "./view/Stock/Stock"
import CreateNew from "./view/AddNew/CreateNew"
function App() {
 return(
  <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AdminLayout/>}>
                <Route path="/" element={<Dashboard/>}></Route>
                <Route path="/patient" element={<Patient/>}></Route>
                <Route path="/create_new" element={<CreateNew/>}></Route>
                <Route path="/stock" element={<Stock/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>

  </>
 )
}

export default App
