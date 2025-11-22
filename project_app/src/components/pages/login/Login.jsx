import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

const { login, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    login(userData.username, userData.password);
    navigate("/posts");
};

    return (
         <div className="app-wrapper">
      <Header />
      <main className="login-main">
         {isAuthenticated ? (
          <p>You are already logged in!</p>
        ) : (

        <form className="login-form" onSubmit={handleSubmit}>
        <input 
          placeholder="Nickname"
          className="border"
          value={userData.username} onChange={e => setUserData({...userData, username: e.target.value})}/>

        <input 
        placeholder="Password"
        type="password"
        className="border"
        value={userData.password} onChange={e => setUserData({...userData, password: e.target.value})}/>
        <button type="submit" className="login-button">Login</button>
        </form>
        )}
          </main>
      <Footer />
    </div>
    );
}

 export default Login;