import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Main from './pages/MainPage'
  
export function Router() {

    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main/>} />
            </Routes>
        </BrowserRouter>
    )

}