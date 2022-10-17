import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreatePatient from "./pages/CreatePatient";
import CreateDoctor from "./pages/CreateDoctor";
import MainPage from "./pages/MainPage";
import PagDoctor from "./pages/PagDoctor";
import PagPatient from "./pages/PagPatient";
  
export function Router() {

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path="/patient" element={<PagPatient />}/>
                <Route path="/doctor" element={<PagDoctor />}/>
                <Route path='/patient/createNewPatient' element={<CreatePatient/>} />
                <Route path='/doctor/createNewDoctor' element={<CreateDoctor/>} />
            </Routes>
        </BrowserRouter>
    )

}