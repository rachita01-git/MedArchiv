import React, { useState,useEffect } from 'react'
import PNotification from './PNotification'
function PatientNotification() {
  let [Notification,setNotification]=useState([])
       useEffect(()=>{
         const FetchDoctor=async()=>{
           try{
            const userId = localStorage.getItem('userId');
             const res= await(await fetch(`http://localhost:8080/Notificationapi/Notification/${userId}`)).json();// yha per id dalna hai patient ka
             setNotification(res);
            //  console.log(res);
   
           }catch(error)
           {
             console.log(error);
           }
         }
         FetchDoctor();
       },[])
      //  console.log(Notification);
 
  return (
    <div style={{marginTop:"6rem", marginLeft:"5rem"}}>
      <PNotification Notification={Notification}/>
    </div>
  )
}

export default PatientNotification
