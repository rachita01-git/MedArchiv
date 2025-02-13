import React, { useState } from 'react'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import style from '../../Style/PatientCss/ViewDoctor.module.css'
import arrow from '../../assets/messagearrow.png'
import ratings from '../../assets/rating.png'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { format } from 'date-fns';

function ViewDoctor() {

    const {id}=useParams();
     let [input,setinput]=useState("");
        let inputchange=(event)=>{
            setinput(event.target.value)
        }
    console.log(id)
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
      let [check,setCheck]=useState(0);
      useEffect(()=>{
       
        const fetchEmp=async()=>{
            try{
                const res = await fetch(`http://localhost:8080/Doctorapi/Doctor/${id}`);
                const data=await res.json();
                setDoctor(data);
            }
            catch(error){
                console.error("Error in fetching user ",error.message);
            }
        }
        setCheck(0);
        fetchEmp();
        
    
    },[id]);


 let BookAppointment =()=>{
    const fetchEmp=async()=>{
        
        try{

            setCheck(1);
            const userId = localStorage.getItem('userId');
            let patientname = await(await fetch(`http://localhost:8080/Patientapi/getname/${userId}`)).text()// patient id by local Storage
            // console.log(res.name);

            let currentDateAndTime = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
             currentDateAndTime = new Date(currentDateAndTime); 
            const appointment = {
                patientId: userId,// local storage se id aayega
                createdAt: currentDateAndTime,
                message: input,
                status: "Pending",
                doctorId: id,
                appointmentTime: "",
                pname:patientname
              };

              console.log(appointment);
            
            const res1 = await fetch('http://localhost:8080/Appointmentapi/Appointment',{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(appointment)
            });
            const data1 = await res1.json();
            console.log("Employee Created : ",data1);

           
            let res= await(await fetch(`http://localhost:8080/Doctorapi/Doctor/${data1.doctorId}`)).json()
            
             

            const notification={
                status: "Pending",
                appointmentTime: null,
                createdAt: currentDateAndTime,
                doctorId: data1.doctorId,
                dname: res.name,
                pname:patientname, 
                pId: data1.patientId,
                appointmentId: data1.id
          }
          console.log(notification);

            const res2 = await fetch('http://localhost:8080/Notificationapi/Notifications',{
                method:"post",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(notification)
            });
             const data2 = await res2.json();
            console.log("Employee Created : ",data2);
        }
        catch(error){
            console.error("Error in fetching user ",error.message);
        }
    }
    fetchEmp();

 }
    // console.log(Doctor);
    // console.log(Appoint);
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
                                  <div className={style.chatmessage}>
                                    <div className={style.person2div}>
                                      <p className={style.person2}>{input}</p>
                                    </div>
                                  </div>
                                  {check==0?
                                  <div className={style.inputdiv}>
                                  
                                    <input type="text" value={input} name="message" onChange={inputchange} />
                                    <img src={arrow} alt="" className={style.arrowimg} />
                                  </div>
                                  :null}
                                  {check==0?
                                 <button className={style.btn} onClick={BookAppointment}>Book Appointment</button>:
                                 <button className={style.btn}>Appointment Booked</button>
                                }
                        </div>
                     
                          
          
        </div>
    )
}

export default ViewDoctor
