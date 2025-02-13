import React, { useState } from "react";

import './PatientDashboardEdit.css'
import { useNavigate } from "react-router-dom";

const PatientDashboardEdit = () => {
  const navigate = useNavigate();
  const [patientInfo, setPatientInfo] = useState({
  
    id: 1,
    emailId: null,
    password: "12345",
    phoneNumber: null,
    name:"",
    dob: null,
    age: 98,
    gender: null,
    state: null,
    country: null,
    weight: 0,
    height: 0,
    bloodGroup: null,
    bloodPressure: null,
    diabetes: null,
    allergies: null,
    disease: null,
    kidneyProblem: null,
    heartProblem: null,
    drugUse: null,
    anxietyAttack: null,
    breathingProblem: null
  });
  const userId = localStorage.getItem('userId');

let patientdata=async()=>{
  console.log(patientInfo)
const res=await(await fetch(`http://localhost:8080/Patientapi/updatePatient/${userId}`, {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(patientInfo),
})).json();
}

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Patient Information:", patientInfo);
    navigate("/Dashboard");
  };

  return (
    <div className="container">
      <h1 className="title">Edit Patient Information</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Age:</label>
          <input type="number" name="age" value={patientInfo.age} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Gender:</label>
          <select name="gender" value={patientInfo.gender} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label>Height (cm):</label>
          <input type="number" name="height" value={patientInfo.height} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Weight (kg):</label>
          <input type="number" name="weight" value={patientInfo.weight} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Blood Group:</label>
          <input type="text" name="bloodGroup" value={patientInfo.bloodGroup} onChange={handleChange} required />
        </div>
        <br /> <br />
        <h2 className="subtitle">More Information</h2>
        {[
          "bloodPressure",
          "diabetes",
          "allergies",
          "disease",
          "kidneyProblem",
          "heartProblem",
          "drugUse",
          "anxietyAttack",
          "breathingProblem",
          "stroke",
        ].map((field) => (
          <div className="form-group" key={field}>
            <label>{field.replace(/([A-Z])/g, " $1").trim()}:</label>
            <input type="text" name={field} value={patientInfo[field]} onChange={handleChange} />
          </div>
        ))}
        <button type="submit" onClick={patientdata} className="button submit">Save</button>
      </form>
    </div>
  );
};
export default PatientDashboardEdit;