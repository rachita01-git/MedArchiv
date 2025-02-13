import React, { useEffect, useState } from 'react'
import DoctorCard from './DoctorCard'
import style from '../../Style/PatientCss/FindDoctor.module.css'
function FindDoctor() {
  let [Doctor,setDoctor]=useState([])
    useEffect(()=>{
      const FetchDoctor=async()=>{
        try{
          const res= await(await fetch("http://localhost:8080/Doctorapi/Doctors")).json();
          setDoctor(res);
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
    {Doctor.map((Doct,index)=>(
      Doct.status==="Approved"?
          <DoctorCard Doctor={Doct}key={index}/>:null
      )
    )}
   
  
   </div>
  )
}

export default FindDoctor
