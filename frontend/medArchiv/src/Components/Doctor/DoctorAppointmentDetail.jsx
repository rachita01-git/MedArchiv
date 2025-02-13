
import React, { useState,useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import style from "../../Style/DoctorCss/DoctorAppointmentDetail.module.css"
import arrow from '../../assets/messagearrow.png'
import 'react'


function DoctorAppointmentDetail() {
  
  const { pid,aid } = useParams();
  let [input, setinput] = useState("");
  const navigate = useNavigate();
  console.log(pid,aid);
  let inputchange = (event) => {
    setinput(event.target.value)
  }
  let sendmessage = (event) => {
    event.target.value = "";
  
  }


   let [Patient,setPatient]=useState([])
   let [Appoint,setAppoint]=useState([])
    useEffect(()=>{
      const FetchDoctor=async()=>{
        try{
          const res= await(await fetch(`http://localhost:8080/Patientapi/getdata/${pid}`)).json();
          const res2= await(await fetch(`http://localhost:8080/Appointmentapi/PaitentAppointmentBy/${aid}`)).json();
          setPatient(res);
          setAppoint(res2);  
        }catch(error)
        {
          console.log(error);
        }
      }
      FetchDoctor();
    },[])

let message={
  message:input
}


let senddata= async()=>{
  const res = await (await fetch(`http://localhost:8080/Appointmentapi/updateAppoinmentmessage/${Appoint.id}`, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(message)
})).json();
setinput("")
navigate(0);
  // console.log(res);
}





  return (
    <div className={style.DoctorAppointmentDetail}>
      <div className={style.sectionone}>
        <div className={style.message}>
          <div className={style.namecard}>
            <div><img src={Patient.gender=="male"?male:female} alt={male} title={male} className={style.img} /></div>
            <div><h3>{Patient.name}</h3></div>
          </div>

          <div className={style.messagebox}>
            <p className={style.messageheading}>Message</p>
            <p className={style.messages}>{Appoint.message}
              I am writing to express concern about persisten in my [specify which hand,  left/right] hand, particularly when [describe specific actions that cause pain, like gripping, making a fist, or typing]. This pain has been present for [duration of pain] and is starting to interfere with my daily activities.
              </p>
          </div>
        </div>

        <div className={style.chatbox}>
          <div className={style.chatmessage}>
            <div className={style.person1div}>
              <p className={style.person1}>{Appoint.message}</p><br />
            </div>
            <div className={style.person2div}>
              <p className={style.person2}>{Appoint.dmessage}</p>
            </div>
          </div>
          {Appoint.status=="Schedule"?
          <div className={style.inputdiv}>
            
            <input type="text" value={input} name="message" onChange={inputchange} />
            <img src={arrow} alt="" className={style.arrowimg} onClick={senddata} />
          </div>
          :null}
        </div>


       
      </div>
      <div className={style.sectiontwo}>



      <div className={style.details}>
         <div className={style.moreinfo}>
          <h4>Information     </h4>
          <table>
            <tbody>
              <tr>
                <td>Age</td>
                <td>{Patient.age}</td>
              </tr>
              <tr>
                <td>Gender </td>
                <td>{Patient.gender}</td>
              </tr>
              <tr>
                <td>Height </td>
                <td>{Patient.height}kg</td>
              </tr>
              <tr>
                <td>Weight</td>
                <td>{Patient.weight}ft</td>
              </tr>
              <tr>
                <td>Blood Group</td>
                <td>{Patient.bloodGroup}</td>
              </tr>
             
            </tbody>
          </table>
        </div>
        <div className={style.moreinfo1}>
          <h4>More Info  </h4>
          <table>
            <tbody>
              <tr>
                <td>Blood Pressure</td>
                <td>{Patient.bloodPressure}</td>
              </tr>
              <tr>
                <td>Diabetes</td>
                <td>{Patient.diabetes}</td>
              </tr>
              <tr>
                <td>Allergies</td>
                <td>{Patient.allergies}</td>
              </tr>
              <tr>
                <td>Disease</td>
                <td>{Patient.disease}</td>
              </tr>
              <tr>
                <td>Kidney Problem</td>
                <td>{Patient.kidneyProblem}</td>
              </tr>


              <tr>
                <td>Heart Problem</td>
                <td>{Patient.heartProblem}</td>
              </tr>
              <tr>
                <td>Drug use</td>
                <td>{Patient.drugUse}</td>
              </tr>
              <tr>
                <td>Anxiety attack</td>
                <td>{Patient.anxietyAttack}</td>
              </tr>
              <tr>
                <td>Breathing Problem</td>
                <td>{Patient.breathingProblem}</td>
              </tr>
              
            
              
              
            </tbody>
          </table>
        </div>
        </div>


       
        

      </div>
    </div>
  )
}

export default DoctorAppointmentDetail
