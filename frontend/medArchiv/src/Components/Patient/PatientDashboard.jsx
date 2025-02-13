import React, { useEffect, useState } from "react";
import style from '../../Style/PatientCss/PatientDashboard.module.css'
import { useNavigate } from "react-router-dom";
import male from '../../assets/male.png'
import female from '../../assets/female.png'
const PatientDashboard = () => {
  const navigate = useNavigate();

  const [patientData, setPatientData] = useState({


  });

  useEffect(async()=>{
    const userId = localStorage.getItem('userId');
    const res=await (await fetch(`http://localhost:8080/Patientapi/getdata/${userId}`)).json();
    setPatientData(res);
  },[])


console.log(patientData);
let loadpage=()=>{
  navigate("/edit")
}
 

  return (
    <div className={style.dashboardContainer}>
      <div className={style.topSection}>
        <div className={style.profileSection}>
          <div className={style.profileImage}>
            
              <img src={patientData.gender=="Male"?male:female} alt="Profile" className={style.uploadedImage} />
           
            {/*  */}
            
          </div>

         <div className={style.profileDetails}>
            <p className={style.profileName}>{patientData.name}</p>
          </div>
          <div className={style.aboutSection}>
          <button className={style.editButton} onClick={() => navigate("/edit")}>Edit</button>              
          </div>
       </div>
        
        
      </div>
      <div className={style.bottomSection}>
        <div className={style.infoCard}>
          <h3>Personal Info</h3>
          <p><b>Name:</b> {patientData.name}</p>
          <p><b>Email:</b> {patientData.emailId}</p>
          <p><b>Phone:</b> {patientData.phoneNumber}</p>
          <p><b>Birthday:</b> {patientData.dob}</p>
          <p><b>Age:</b> {patientData.age}</p>
          <p><b>Gender:</b> {patientData.gender}</p>
          <p><b>State:</b> {patientData.state}</p>
          <p><b>Country:</b> {patientData.country}</p>
          <p><b>Stroke:</b> {patientData.Stroke}</p>
        </div>
        <div className={style.infoCard}>
          <h3>Medical Info</h3>
          <p><b>BloodPressure:</b> {patientData.bloodPressure}</p>
          <p><b>Diabetes:</b> {patientData.diabetes}</p>
          <p><b>Allergies:</b> {patientData.Allergies}</p>
          <p><b>Disease:</b> {patientData.disease}</p>
          <p><b>KidneyProblem:</b> {patientData.kidneyProblem}</p>
          <p><b>HeartProblem:</b> {patientData.heartProblem}</p>
          <p><b>Drug use:</b> {patientData.drugUse}</p>
          <p><b>Anxiety Attack:</b> {patientData.anxietyAttack}</p>
          <p><b>BreathingProblem:</b> {patientData.breathingProblem}</p>
        
        </div>
        <button className={style.editButton} onClick={loadpage}>Edit</button>
      </div>
    </div>
  );
};

export default PatientDashboard;