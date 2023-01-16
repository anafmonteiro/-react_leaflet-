import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";


const AppRoutes: React.FC = () => (
        <BrowserRouter>
            <Routes>
                <Route path="" element={<div></div>} />
            </Routes>
        </BrowserRouter>
      
);

export default AppRoutes;