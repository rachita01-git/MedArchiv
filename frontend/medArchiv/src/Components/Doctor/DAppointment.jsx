import React from 'react'
import style from '../../Style/DoctorCss/DAppointment.module.css'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import {Link, Outlet,useNavigate, useParams} from "react-router-dom"
import { useState,useEffect,useReducer } from 'react'

function DAppointment() {
  // let {pid}=useParams();
  // console.log(pid)
  const navigate = useNavigate(); 


  let [time,setTime]=useState("11:00 AM")
     const [PatientDetail, setPatientDetail] = useState([
            { 
              pid: 1, 
              name: "Harshit Mishra", 
              Gender: "male", 
              message: "I am writing to express concern about persistent pain and discomfort in my hand."
            },
        { 
          pid: 2, 
          name: "Anita Sharma", 
          Gender: "female", 
          message: "I have been experiencing severe headaches and neck pain for a few weeks now."
        },
        { 
          pid: 3, 
          name: "Raj Kumar", 
          Gender: "male", 
          message: "I feel constant fatigue and dizziness which is affecting my daily routine."
        },
        { 
          pid: 4, 
          name: "Priya Verma", 
          Gender: "female", 
          message: "I am worried about the sharp pain in my knees, especially when climbing stairs."
        }
          ]);

          const userId = localStorage.getItem('userId');

          let [DoctorAppointment,setDoctorAppointment]=useState([])
              useEffect(()=>{
                const FetchDoctor=async()=>{
                  try{
                    const res= await(await fetch(`http://localhost:8080/Appointmentapi/DoctorAppointmentBy/${userId}`)).json();// yha per id dalna hai doctorid by local storage ka
                    setDoctorAppointment(res);
                    console.log(res);
            
                  }catch(error)
                  {
                    console.log(error);
                  }
                }
                FetchDoctor();
              },[])

              // console.log(DoctorAppointment);


let Scheduletime=(event)=>{
  setTime(event.target.value);
}

let Givetime=(id)=>{
let status="Schedule";
let setdata= async()=>{
  const res=await(await fetch(`http://localhost:8080/Appointmentapi/updateAppoinment/${id}/${time}/${status}`,)).json();
  const res2=await(await fetch(`http://localhost:8080/Notificationapi/updateNotification/${id}/${time}/${status}`,)).json();
  navigate(0)
}
setdata();
}

let complete=(id)=>{

 let status="Complete";
 let setdata= async()=>{
  const res=await(await fetch(`http://localhost:8080/Appointmentapi/updateAppoinmentstatus/${id}/${status}`,)).json();
  const res2=await(await fetch(`http://localhost:8080/Notificationapi/updateNotificationstatus/${id}/${status}`,)).json();
  navigate(0)
                      }
setdata();
}

  return (
    <>
    {DoctorAppointment.map((PatientD,index)=>{
return(
  PatientD.status!="Complete"?
    <div className={style.card} key={index}>
    <div>
        <img src={PatientD.Gender=='male'?male:female} className={style.img} alt={PatientDetail.Gender} title={PatientD.name} />
    </div>
    <div className={style.namesection}>
        <h3>{PatientD.pname}</h3>
        <p className={style.message}>{PatientD.message}</p>
    </div>
    <div className={style.buttonSection}>
        <div className={style.selectsection}>
            <select name="" id="" className={style.selectTime} onChange={Scheduletime}>
                <option value="11:00 AM">11:00 AM</option>
                <option value="11:30 AM">11:30 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="12:30 PM">12:30 PM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="1:30 PM">1:30 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="2:30 PM">2:30 PM</option>
                <option value="3:00 PM">3:00 PM</option>
            </select>
        <Link to={`/DoctorAppointmentDetail/${PatientD.patientId}/${PatientD.id}`}><button className={style.view}>View</button></Link>
        
        </div>

        <div className={style.Btn}>
          {PatientD.status=="Pending"?
          <button className={style.Appointbtn} onClick={()=>Givetime(PatientD.id)}>Appoint</button>:PatientD.status=="Schedule"?
          <button className={style.Appointbtn} onClick={()=>complete(PatientD.id)}>Complete</button>:null
        }
            
      
        </div>
    </div>
</div>
:<></>
);
    })}
    
</>
  )
}

export default DAppointment
