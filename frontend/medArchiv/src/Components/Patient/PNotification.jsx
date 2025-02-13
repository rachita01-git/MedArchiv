import React, { useEffect, useState } from 'react'
import style from '../../Style/PatientCss/PNotification.module.css'
import { Link} from 'react-router-dom'
function PNotification({Notification}) {
         console.log(Notification);
         let DoctorName;
         useEffect(()=>{

          let getDoctordata = async()=>{
            let res= await(await fetch(`http://localhost:8080/Doctorapi/Doctor/${Notification.doctorId}`)).json()
          DoctorName=res.name;
          }
          // getDoctordata();
         },[])
        //  console.log(DoctorName);
  return (
    <div>
      <h2 className={style.h2}>Notification</h2>
      <table className={style.table}>
        <tbody>
            <tr className={style.tr}>
                <th>Appointment id</th>
                <th>Doctor ID</th>
                <th>Doctor Name</th>
                <th>Appointment Booking time</th>
                <th>Status</th>
                <th>Appointment Time</th>
                <th>Visit</th>
             </tr>
             {Notification.map((notification,index)=>{
                return <tr className={style.data} key={index}>
                 <td>{notification.appointmentId}</td>
                 <td>{notification.doctorId}</td>
                 <td>{notification.dname}</td>
                 <td>{notification.createdAt}</td>
                 <td className={notification.status=="Complete"?style.complete:notification.status=="Pending"?style.pending:style.scheduled}>{notification.status}</td>
                 <td>{notification.appointmentTime}</td>
                 <td><Link to={`/ViewDoctorNotify/${notification.doctorId}/${notification.appointmentId}`}><button className={notification.status=="Complete"?style.completebtn:notification.status=="Pending"?style.pendingbtn:style.scheduledbtn} id={style.btn}>view</button> </Link></td>
             
             </tr>
             })}
           
        </tbody>
      </table>
    </div>
  )
}

export default PNotification
