import React from "react";
import './App.css'
import { Route, Routes } from "react-router";
import LoginPage from "./components/LoginPage";
import RegisterForm from "./features/users/UserRegisterForm";
import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LoginPage/>}/>
          <Route path="register">
            <Route index element={<RegisterForm/>}/>
          </Route>
          <Route path="welcome" >
            <Route index element={<WelcomePage/>}/>
          </Route>
      </Route>
    </Routes>
  );
}

export default App;
