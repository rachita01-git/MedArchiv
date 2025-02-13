import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../Style/OthersCss/DRegistration.module.css';

function DRegistration() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    emailId: "",
    password: "",
    confirmPassword: "",
    areaOfPractice: "",
    experience: "",
    qualification: "",
    phoneNo: "",
    state: "",
    dob: "",
    gender: "",
  });

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

    const doctorData = {
      name: formData.name,
      emailId: formData.emailId,
      password: formData.password,
      areaOfPractice: formData.areaOfPractice,
      experience: formData.experience,
      qualification: formData.qualification,
      phoneNo: formData.phoneNo,
      state: formData.state,
      dob: formData.dob,
      gender: formData.gender,
      status:"Pending"
    };

    try {
      const response = await fetch("http://localhost:8080/doctorapilogin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(doctorData)
      });

      if (response.ok) {
        const doctor = await response.json();
        // localStorage.setItem("doctorId", doctor.id);  
        
        alert("Doctor Registered Successfully!");
        navigate("/login");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      alert("Registration Failed! Please try again.");
    }
  };

  return (
    <div className={style.registrationContainer}>
      <div className={style.registrationCard}>
        <h2 className={style.registrationTitle}>Doctor Registration</h2>

        <form onSubmit={handleSubmit}>
          <div className={style.formGroup}>
            <p>Name:</p>
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
            <p>Area of Practice:</p>
            <input type="text" name="areaOfPractice" value={formData.areaOfPractice} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Experience:</p>
            <input type="text" name="experience" value={formData.experience} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Qualification:</p>
            <input type="text" name="qualification" value={formData.qualification} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Phone:</p>
            <input type="tel" name="phoneNo" value={formData.phoneNo} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>State:</p>
            <input type="text" name="state" value={formData.state} onChange={handleChange} required />
          </div>

          <div className={style.formGroup}>
            <p>Date of Birth:</p>
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
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

export default DRegistration;
