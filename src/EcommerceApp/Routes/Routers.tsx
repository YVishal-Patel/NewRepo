import React from "react";
import { Routes, Route } from "react-router-dom";
import ForgetPassword from "../Auth/ForgetPassword";
import LoginForm from "../Auth/Login";
import SignIn from "../Auth/SignIn";
import Home from "../../components/Pages/Home";
import About from "../../components/Pages/About";
import Header from "../../components/Pages/Shared/Header";
import Footer from "../../components/Pages/Shared/Footer";
import Profile from "../Pages/Profile";
import Services from "../Pages/Services";
import Protected from "./Protected";
import { useAppSelector } from "../Models/SliceModel";

const Routers = () => {
  const { authenticateUser } = useAppSelector((state) => state.user);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path={!authenticateUser ? "/" : "sign-in"}
          element={<SignIn />}
        />
        <Route path={!authenticateUser ? "login" : "*"}
 element={<LoginForm />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/about" element={<Protected Component={About} />} />
        <Route path="/profile" element={<Protected Component={Profile} />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
};

export default Routers;
