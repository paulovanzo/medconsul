import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CreatePatient from "./pages/CreatePatient";
import MainPage from "./pages/MainPage";

import PagPatient from "./pages/PagPatient";
  
export function Router() {

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>} />
                <Route path="/patient" element={<PagPatient />}/>
                <Route path='/patient/createNewPatiente' element={<CreatePatient/>} />

            </Routes>
        </BrowserRouter>
    )

}