import React, { useState } from 'react'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import style from '../../Style/PatientCss/ViewDoctorNotify.module.css'
import arrow from '../../assets/messagearrow.png'
import ratings from '../../assets/rating.png'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns';

function ViewDoctorNotify() {

    const {Did,Aid}=useParams();
     let [input,setinput]=useState("");
        let inputchange=(event)=>{
            setinput(event.target.value)
        }
    console.log(Did)
      let [Doctor,setDoctor]=useState(
        {
            age: 0,
            rating: 0,
            name: "Mishra",
            id: 3,
            state: "",
            country: "",
            password: "",
            emailId: "",
            phoneNo: "",
            gender: "",
            dob: "",
            appointmentCount: 0,
            patientCount: 0,
            licenceNumber: "",
            createdDate: "",
            areaOfPractice: "",
            specialization: "",
            experience: "",
            aboutDoctor: "",
            qualification: ""
        }
      )
      let [msg,setmsg]=useState("");
      let [msg1,setmsg1]=useState("");

      useEffect(()=>{
       
        const fetchEmp=async()=>{
            try{
                const res = await fetch(`http://localhost:8080/Doctorapi/Doctor/${Did}`);
                const data=await res.json();
                setDoctor(data);
                const res1 = await(await fetch(`http://localhost:8080/Appointmentapi/PaitentAppointmentBy/${Aid}`)).json();
                // console.log(res1.message);
                setmsg(res1.message);
                setmsg1(res1.dmessage);
            }
            catch(error){
                console.error("Error in fetching user ",error.message);
            }
        }
        fetchEmp();
    
    },[Did]);

    return (
        <div className={style.DoctorDetail}>

            <div className={style.sectionone}>
                <div className={style.card}>
                    <div className={style.card1}>
                        <div>
                            <img src={Doctor.gender=="male"?male:female} className={style.img} alt="female" title="women" />
                        </div>
                        <div className={style.namesection}>
                            <h3>Dr.{Doctor.name}</h3>
                            <p className={style.message}>{Doctor.specialization}</p>
                        </div>
                    </div>
                    <div className={style.card2}>
                        
                        <h4>About Dr </h4>
                        <p>{Doctor.aboutDoctor}</p>
                    
                    </div>

                </div>
                <div className={style.moreinfo1}>
                <div className={style.info}>
                    <h4 className={style.heading}>More Info  </h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Specialization</td>
                                <td>{Doctor.specialization}</td>
                            </tr>
                            <tr>
                                <td>Qualification</td>
                                <td>{Doctor.qualification}</td>
                            </tr>
                            <tr>
                                <td>Experience</td>
                                <td>{Doctor.experience} year</td>
                            </tr>
                            <tr>
                                <td>License Number </td>
                                <td>{Doctor.licenceNumber}</td>
                            </tr>
                            <tr>
                                <td>Area of Practice</td>
                                <td>{Doctor.areaOfPractice}</td>
                            </tr>
                            <tr>
                                <td>state Country</td>
                                <td>{Doctor.state} {Doctor.country}</td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                                <td>{
                                    Array.from({length:Doctor.rating}).map((_,index)=>{
                                        return (
                                            <img src={ratings} className={style.rate}/>
                                        )
                                    })
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>

            <div className={style.chatbox}>
                                  {/* <div className={style.chatmessage}> */}
                                    {/* <div className={style.person2div}> */}
                                    <p className={style.person3}>Your message  : <span className={style.person4}>{msg}</span></p>
                                    <p className={style.person3}>Doctor message  : <span className={style.person4}>{msg1}</span></p>
                                      {/* <p className={style.person4}>{msg1}</p> */}
                                    {/* </div> */}
                                  {/* </div> */}
                                 
                                  {/* <button className={style.btn} onClick={BookAppointment}>Book Appointment</button> */}
                        </div>
                     
                          
          
        </div>
    )
}

export default ViewDoctorNotify
