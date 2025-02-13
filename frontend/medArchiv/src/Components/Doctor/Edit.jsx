import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "../../Style/DoctorCss/Edit.module.css";

const Edit = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const doctorData = location.state?.doctorData || {};

  const [formData, setFormData] = useState({
    ...doctorData,
    email: doctorData.email || "",  
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const userId = localStorage.getItem('userId');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/doctordashboardapi/update/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedDoctor = await response.json();
        alert("Profile updated successfully!");
        navigate("/Dashboard", { state: { doctorData: updatedDoctor } });
      } else {
        alert("Failed to update profile. Please try again.");
      }
    } catch (error) {
      console.error("Error updating doctor profile:", error);
      alert("An error occurred while updating the profile.");
    }
  };

  return (
    <div className={style.editContainer}>
      <div className={style.editCard}>
        <h2 className={style.editTitle}>Edit Doctor Profile</h2>

        <form onSubmit={handleSubmit}>
          <div className={style.formSection}>
            <h3>Personal Information</h3>
            <label><b>Name:</b></label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />

            <label><b>Email:</b></label>
            <input type="email" name="email" value={formData.email} disabled className={style.disabledInput} />

            <label><b>Phone:</b></label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required />

            <label><b>Birthday:</b></label>
            <input type="date" name="birthday" value={formData.birthday} onChange={handleInputChange} required />

            <label><b>Age:</b></label>
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} required />

            <label><b>Gender:</b></label>
            <div className={style.genderOptions}>
              <label><input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleInputChange} /> Male</label>
              <label><input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleInputChange} /> Female</label>
              <label><input type="radio" name="gender" value="Other" checked={formData.gender === "Other"} onChange={handleInputChange} /> Other</label>
            </div>
          </div>

          <div className={style.formSection}>
            <h3>Professional Information</h3>
            <label><b>Area of Practice:</b></label>
            <input type="text" name="areaOfPractice" value={formData.areaOfPractice} onChange={handleInputChange} required />

            <label><b>Experience:</b></label>
            <input type="text" name="experience" value={formData.experience} onChange={handleInputChange} required />

            <label><b>Qualification:</b></label>
            <input type="text" name="qualification" value={formData.qualification} onChange={handleInputChange} required />

            <label><b>District:</b></label>
            <input type="text" name="district" value={formData.district} onChange={handleInputChange} required />

            <label><b>State:</b></label>
            <input type="text" name="state" value={formData.state} onChange={handleInputChange} required />

            <label><b>Country:</b></label>
            <input type="text" name="country" value={formData.country} onChange={handleInputChange} required />
          </div>

          <button type="submit" className={style.saveButton}>Save Changes</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
