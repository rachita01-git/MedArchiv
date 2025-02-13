import React, { useState,useEffect } from 'react'
import style from '../../Style/DoctorCss/DNotification.module.css'
import { Link } from 'react-router-dom'
function DNotification() {

  let [Notification,setNotification]=useState([])
  useEffect(()=>{
    const userId = localStorage.getItem('userId');
    const FetchDoctor=async()=>{
      try{
        const res= await(await fetch(`http://localhost:8080/Notificationapi/NotificationByDoctor/${userId}`)).json();// yha per id dalna hai patient ka
        setNotification(res);
       //  console.log(res);

      }catch(error)
      {
        console.log(error);
      }
    }
    FetchDoctor();
  },[])

  return (
    <div>
      <h2 className={style.h2}>Notification</h2>
      <table className={style.table}>
        <tbody>
            <tr className={style.tr}>
                <th>Appointment id</th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Appointment Booking time</th>
                <th>Status</th>
                <th>Appointment Time</th>
                <th>Visit</th>
             </tr>
             {Notification.map((notification,index)=>{
                return <tr className={style.data} key={index}>
                 <td>{notification.appointmentId}</td>
                 <td>{notification.pId}</td>
                 <td>{notification.pname}</td>
                 <td>{notification.createdAt}</td>
                 <td className={notification.status=="Complete"?style.complete:notification.status=="Pending"?style.pending:style.scheduled}>{notification.status}</td>
                 <td>{notification.appointmentTime}</td>
                 <td><Link to={`/DoctorAppointmentDetail/${notification.pId}/${notification.id}`}><button className={notification.status=="Complete"?style.completebtn:notification.status=="Pending"?style.pendingbtn:style.scheduledbtn} id={style.btn}>view</button> </Link></td>
             </tr>
             })}
             
        </tbody>
      </table>
    </div>
  )
}

export default DNotification
