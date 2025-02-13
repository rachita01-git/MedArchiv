import React from 'react'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import { useParams} from 'react-router-dom'
import { useState } from 'react'
import style from "../../Style/PatientCss/PatientAppointment.module.css"
import arrow from '../../assets/messagearrow.png'

function PAppointment() {
      const { pid } = useParams();
      let [input, setinput] = useState("");
      console.log(pid);
      let inputchange = (event) => {
        setinput(event.target.value)
      }
      let sendmessage = (event) => {
        event.target.value = "";
      }
  return (
    <>
       <div className={style.sectionone}>
          <div className={style.message}>
            <div className={style.namecard}>
              <div><img src={male} alt={male} title={male} className={style.img} /></div>
              <div><h3>Harshit mishra</h3></div>
            </div>
  
            <div className={style.messagebox}>
              <span>Message  </span>
              <p>
                I am writing to express concern about persisten in my [specify which hand, left/right] hand, particularly when [describe specific actions that cause pain, like gripping, making a fist, or typing]. This pain has been present for [duration of pain] and is starting to interfere with my daily activities.</p>
            </div>
          </div>
  
          <div className={style.chatbox}>
            <div className={style.chatmessage}>
              <div className={style.person1div}>
                <p className={style.person1}>person1</p><br />
              </div>
              <div className={style.person2div}>
                <p className={style.person2}>{input}</p>
              </div>
            </div>
            <div className={style.inputdiv}>
              <input type="text" value={input} name="message" onChange={inputchange} />
              <img src={arrow} alt="" className={style.arrowimg} />
            </div>
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
                  <td>23</td>
                </tr>
                <tr>
                  <td>Gender </td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td>Height </td>
                  <td>59kg</td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>5.4ft</td>
                </tr>
                <tr>
                  <td>Blood Group</td>
                  <td>o+</td>
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
                  <td>121,97</td>
                </tr>
                <tr>
                  <td>Diabetes</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Allergies</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Disease</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Kidney Problem</td>
                  <td>No</td>
                </tr>
  
  
                <tr>
                  <td>Heart Problem</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Drug use</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Anxiety attack</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Breathing Problem</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Stroke</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Breathing Problem</td>
                  <td>No</td>
                </tr>
                <tr>
                  <td>Stroke</td>
                  <td>No</td>
                </tr>
                
                
              </tbody>
            </table>
          </div>
          </div>
  
  
         
          
  
        </div>
    </>
  )
}

export default PAppointment
