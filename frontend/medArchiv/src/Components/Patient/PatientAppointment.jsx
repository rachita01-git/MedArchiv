import React from 'react'
import PAppointment from './PAppointment'
import 'react'
import style from '../../Style/PatientCss/FindDoctor.module.css'
import DoctorCardAppoint from './DoctorCardAppoint'
import { useState,useEffect } from 'react'
function PatientAppointment() {

  let [Appointment,setAppointment]=useState([])
      useEffect(()=>{
        const userId = localStorage.getItem('userId');
        const FetchDoctor=async()=>{
          try{
            const res= await(await fetch(`http://localhost:8080/Appointmentapi/PaitentAppointment/${userId}`)).json();// yha per id dalna hai patient ka
            setAppointment(res);
            console.log(res);
  
          }catch(error)
          {
            console.log(error);
          }
        }
        FetchDoctor();
      },[])


  return (
   <div className={style.findDoctor}>
    {
    Appointment.map((Appoint)=>
       <DoctorCardAppoint Appointment={Appoint} key={Appoint.id}/>
    )}
      
      </div>
  )
}

export default PatientAppointment
