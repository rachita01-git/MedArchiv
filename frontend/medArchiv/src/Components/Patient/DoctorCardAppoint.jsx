import React from 'react'
import style from '../../Style/PatientCss/FindDoctor.module.css'
import female from '../../assets/female.png'
import male from '../../assets/male.png'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'
function DoctorCardAppoint({Appointment}) {

  console.log(Appointment)
  let [Doctor,setDoctor]=useState([])

      useEffect(()=>{
        const FetchDoctor=async()=>{
          try{
            const res= await(await fetch(`http://localhost:8080/Doctorapi/Doctor/${Appointment.doctorId}`)).json();
            setDoctor(res);
            console.log(res);

          }catch(error)
          {
            console.log(error);
          }
        }
        FetchDoctor();
      },[])

// console.log(Doctor);
  return (
    <>{Appointment.status!="Complete"?
       <div className={style.card}>
                <div>
                    <img src={Doctor.gender=="male"?male:female} className={style.img} alt="female" title="women" />
                </div>
                <div className={style.namesection}>
                    <h3>Dr.{Doctor.name}</h3>
                    <p className={style.message}>{Doctor.specialization}</p>
                </div>
                <div className={style.buttonSection}>
                      <div className={style.Btn}>
                     <button className={style.Appointbtn} style={{backgroundColor:Appointment.status=="Complete"?"green":Appointment.status=="Schedule"?"green":"rgb(250, 144, 6)"}}>{Appointment.status}</button>
                    </div>
                </div>
            </div>
            :null}
    </>
  )
}

export default DoctorCardAppoint
