import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import HomePage from "../Pages/Home";


const AppRoutes: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<HomePage/>} />
            </Routes>
        </BrowserRouter>
      
);

export default AppRoutes;