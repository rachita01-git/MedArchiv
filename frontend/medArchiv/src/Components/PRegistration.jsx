import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../Style/OthersCss/PRegistration.module.css';

function PRegistration() {
  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    age: "",
    gender: "Male",
    state: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGenderChange = (e) => {
    setFormData({ ...formData, gender: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const patientData = {
      name: formData.name,
      emailId: formData.emailId,
      phoneNumber: formData.phoneNumber,
      age: parseInt(formData.age),
      gender: formData.gender,
      state: formData.state,
      country: formData.country,
      password:formData.password
    };

    try {
      const response = await fetch("http://localhost:8080/patientloginapi/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patientData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Registration failed");
      }

      const responseData = await response.text(); 
      alert(responseData);
      navigate("/login");

    } catch (error) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className={style.registrationContainer}>
      <div className={style.registrationCard}>
        <h2 className={style.registrationTitle}>Patient Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <p>Full Name:</p>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Email:</p>
            <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Password:</p>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Confirm Password:</p>
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Phone Number:</p>
            <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Age:</p>
            <input type="number" name="age" value={formData.age} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>State:</p>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Country:</p>
            <input type="text" name="country" value={formData.country} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Gender:</p>
            <div className={style.genderOptions}>
              <label>
                <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleGenderChange} />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleGenderChange} />
                Female
              </label>
              <label>
                <input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleGenderChange} />
                Other
              </label>
            </div>
          </div>

          <button type="submit" className={style.registerButton}>Register</button>
        </form>
      </div>
    </div>
  );
}

export default PRegistration;
