import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from '../../Style/DoctorCss/DoctorDashboard.module.css';
import male from '../../assets/male.png'
import female from '../../assets/female.png'
const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [doctorData, setDoctorData] = useState(null);
  const [isEditingAbout, setIsEditingAbout] = useState(false);
  const [aboutText, setAboutText] = useState("");

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const doctorId = localStorage.getItem("userId");
        if (!doctorId) {
          alert("Doctor ID not found. Please log in again.");
          navigate("/login");
          return;
        }

        const response = await fetch(`http://localhost:8080/doctordashboardapi/${doctorId}`);
        if (response.ok) {
          const data = await response.json();
          setDoctorData(data);
          setAboutText(data.about || ""); 
        } else {
          alert("Failed to fetch doctor data.");
        }
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctorData();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate("/login");
  };

  const handleEditProfile = () => {
    navigate("/edit");
  };

  const handleAboutChange = (e) => {
    if (e.target.value.length > 250) {
      alert("About section can have 250 characters only.");
      return;
    }
    setAboutText(e.target.value);
  };

  const handleSaveAbout = async () => {
    if (!doctorData) return;

    try {
      const response = await fetch(`http://localhost:8080/doctordashboardapi/update/${doctorData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          aboutDoctor: aboutText, 
        }),
      });

      if (response.ok) {
        const updatedData = await response.json();
        setDoctorData(updatedData); 
        setIsEditingAbout(false);
      } else {
        alert("Failed to update 'About' section.");
      }
    } catch (error) {
      console.error("Error updating about section:", error);
    }
  };

  if (!doctorData) {
    return <div className={style.loading}>Loading doctor data...</div>;
  }

  return (
    <div className={style.dashboardContainer}>
      <div className={style.topSection}>
        <div className={style.profileSection}>
          
          <div className={style.profileImage}>
           
              <img src={doctorData.gender=="male"?male:female} alt="Profile" className={style.uploadedImage} />
          </div>

          <div className={style.profileDetails}>
            <p className={style.profileName}>{doctorData.name}</p>
            <p className={style.profileQualification}>{doctorData.qualification}</p>
          </div>

          <div className={style.aboutDr}>
            <h3>About Dr</h3>
            {isEditingAbout ? (
              <>
                <textarea
                  value={aboutText}
                  onChange={handleAboutChange}
                  maxLength="250"
                  className={style.aboutTextarea}
                />
                <p>{250 - aboutText.length} characters left</p>
                <button onClick={handleSaveAbout} className={style.saveButton}>
                  Save
                </button>
                <button onClick={() => setIsEditingAbout(false)} className={style.cancelButton}>
                  Cancel
                </button>
              </>
            ) : (
              <>
                <p>{doctorData.aboutDoctor}</p>
                <button onClick={() => setIsEditingAbout(true)} className={style.editAboutButton}>
                  Edit
                </button>
              </>
            )}
          </div>
        </div>

     
      </div>

      <div className={style.bottomSection}>
        <div className={style.infoCard}>
          <h3>Personal Info</h3>
          <p><b>Name:</b> {doctorData.name}</p>
          <p><b>Email:</b> {doctorData.emailId}</p>
          <p><b>Phone:</b> {doctorData.phoneNo}</p>
          <p><b>Birthday:</b> {doctorData.dob}</p>
          <p><b>Age:</b> {doctorData.age}</p>
          <p><b>Gender:</b> {doctorData.gender}</p>
        </div>

        <div className={style.infoCard}>
          <h3>Professional Info</h3>
          <p><b>Specialization:</b> {doctorData.specialization}</p>
          <p><b>Experience:</b> {doctorData.experience} years</p>
          <p><b>Qualification:</b> {doctorData.qualification}</p>
          <p><b>Area of Practice:</b> {doctorData.areaOfPractice}</p>
          <p><b>State:</b> {doctorData.state}</p>
          <p><b>Country:</b> {doctorData.country}</p>
        </div>

        <div className={style.buttonGroup}>
          <button className={style.editButton} onClick={handleEditProfile}>Edit Profile</button>
       
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;