import React, { useState } from 'react'
import male from '../../assets/male.png'
import female from '../../assets/female.png'
import style from '../../Style/PatientCss/DoctorDetail.module.css'
import arrow from '../../assets/messagearrow.png'
import ratings from '../../assets/rating.png'
function DoctorDetail() {
    let [input,setinput]=useState("");
    let inputchange=(event)=>{
        setinput(event.target.value)
    }
    let [rating,setrating]=useState(3)
    return (
        <div className={style.DoctorDetail}>

            <div className={style.sectionone}>
                <div className={style.card}>
                    <div className={style.card1}>
                        <div>
                            <img src={male} className={style.img} alt="female" title="women" />
                        </div>
                        <div className={style.namesection}>
                            <h3>  DR. MITHUN BHARTIA</h3>
                            <p className={style.message}>Thyroid</p>
                        </div>
                    </div>
                    <div className={style.card2}>
                        
                        <h4>About Dr </h4>
                        <p>(Limit 250 words)
                            DR. MITHUN BHARTIA IS THE ONLY TRAINED SEXOLOGIST IN NORTH EAST INDIA AND REPRESENTS OUR NATION AT THE WORLDWIDE AGP CLINIC ACADEMY, WHICH SPEARHEADS THE LATEST INNOVATIVE METHODS TO TREAT AND MONITOR DIABETES. </p>
                    
                    </div>

                </div>
                <div className={style.moreinfo1}>
                <div className={style.info}>
                    <h4 className={style.heading}>More Info  </h4>
                    <table>
                        <tbody>
                            <tr>
                                <td>Specialization</td>
                                <td>Dentist</td>
                            </tr>
                            <tr>
                                <td>Qualification</td>
                                <td>MBBS</td>
                            </tr>
                            <tr>
                                <td>Experience</td>
                                <td>5 year</td>
                            </tr>
                            <tr>
                                <td>License Number </td>
                                <td>434k4545345j343kjjkk</td>
                            </tr>
                            <tr>
                                <td>Area of Practice</td>
                                <td>Thyroid,Diabetologist</td>
                            </tr>
                            <tr>
                                <td>District,state</td>
                                <td>Lucknow,up</td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                                <td>{
                                    Array.from({length:rating}).map((_,index)=>{
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
                      <div className={style.inputdiv}>
                        <input type="text" value={input} name="message" onChange={inputchange} />
                        <img src={arrow} alt="" className={style.arrowimg} />
                      </div>
            </div>
        </div>
    )
}

export default DoctorDetail
