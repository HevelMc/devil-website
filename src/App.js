import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Signup from "./components/Auth/Signup";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";
import FogotPassword from "./components/Auth/FogotPassword";
import { AuthProvider } from "./contexts/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Projects} path="/projects" />
          <Route component={Services} path="/services" />
          <Route component={About} path="/about" />
          <Route component={Contact} path="/contact" />
          <Route component={Signup} path="/sign-up" />
          <Route component={Login} path="/log-in" />
          <Route component={Logout} path="/log-out" />
          <Route component={FogotPassword} path="/fogot-password" />
        </Switch>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
