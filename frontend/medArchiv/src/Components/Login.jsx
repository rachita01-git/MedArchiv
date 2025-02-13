import React, { useState } from "react";
import style from '../Style/OthersCss/Login.module.css';

function Login() {
  const [userType, setUserType] = useState("admin");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
    setErrorMessage(""); 
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/loginapi/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          userType: userType
        })

       
      });
      
      console.log(response);
      const data = await response.json();

      let resp=async(id)=>{
         if(userType =="doctor")
          {
            console.log(userType);
            const response = await(await fetch(`http://localhost:8080/Doctorapi/getStatus/${id}`)).text();
  
           localStorage.setItem("status", response);
          }

      }

      if (response.ok && data.status === "success") {
        resp(data.userData.id);
  
        localStorage.setItem("userId", data.userData.id);
        localStorage.setItem("userType", data.userType);
        alert(`Logged in as ${userType}`);

        if (userType === "admin") {
          window.location.href = "/Admin";
        } else if (userType === "doctor") {
          window.location.href = "/Dashboard";
        } else if (userType === "patient") {
          window.location.href = "/Dashboard";
        }

      } else if (response.status === 403 && data.status === "pending") {
        setErrorMessage(data.message); 
      } else {
        setErrorMessage("Invalid email or password");
      }

    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginCard}>
        <h2 className={style.loginTitle}>Login</h2>

        <div className={style.radioGroup}>
          <label>
            <input
              type="radio"
              value="admin"
              checked={userType === "admin"}
              onChange={handleUserTypeChange}
            />
            Admin
          </label>
          <label>
            <input
              type="radio"
              value="doctor"
              checked={userType === "doctor"}
              onChange={handleUserTypeChange}
            />
            Doctor
          </label>
          <label>
            <input
              type="radio"
              value="patient"
              checked={userType === "patient"}
              onChange={handleUserTypeChange}
            />
            Patient
          </label>
        </div>

        <input
          type="email"
          className={style.inputField}
          placeholder="Email"
          name="email"
          value={credentials.email}
          onChange={handleInputChange}
        />

        <input
          type="password"
          className={style.inputField}
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={handleInputChange}
        />

        <button className={style.loginButton} onClick={handleLogin}>
          Login as {userType.charAt(0).toUpperCase() + userType.slice(1)}
        </button>

        {errorMessage && <p className={style.errorMessage}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default Login;
