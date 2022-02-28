import React, { useContext } from "react";
import Home from "../page/Home";
import SignIn from "../page/SignIn";
import UserSignIn from "../page/UserSignIn";
import Login from "../page/Login";
import LandingPage from "../page/LandingPage";
import AuthContext from "../context/auth";
import Master from "../page/Master";
import Manager from "../page/Manager";

import { Route, Routes, BrowserRouter } from "react-router-dom";

const PrivateRoute = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <Home /> : <Login />;
};
const MasterRoute = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <Master /> : <Login />;
};
const SignInRoute = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <SignIn /> : <Login />;
};
const UserSignInRoute = () => {
    const { signed } = useContext(AuthContext);

    return signed ? <UserSignIn /> : <Login />;
};

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/muser" element={<SignInRoute />} />
            <Route path="/user" element={<UserSignInRoute />} />
            <Route path="/login" element={<PrivateRoute />} />
            <Route path="/admin" element={<PrivateRoute />} />
            <Route path="/manager" element={<MasterRoute />} />
            <Route exact path="/" element={<LandingPage />} />
            <Route path="*" element={<LandingPage />} />
        </Routes>
    </BrowserRouter>
);

export default Router;
