import { BrowserRouter, Routes, Route } from "react-router";
import Landing_Page from "./routes/Landing_Page/Landing_Page.jsx";
import Login_Page from "./routes/Login_Page/Login_Page.jsx";
import Verification_Page from "./routes/Verification_Page/Verification_Page.jsx";

function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Landing_Page />}></Route>
                <Route path="/login" element={<Login_Page />}></Route>
                <Route path="/login-verification" element={<Verification_Page />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;