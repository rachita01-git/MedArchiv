import React from 'react'
import style from '../../Style/PatientCss/FindDoctor.module.css'
import female from '../../assets/female.png'
import male from '../../assets/male.png'
import { Link } from 'react-router-dom'
function DoctorCard({Doctor}) {
  return (  
            <div className={style.card}>
                <div>
                    <img src={Doctor.gender=="male"?male:female} className={style.img} alt="female" title="women" />
                </div>
                <div className={style.namesection}>
                    <h3>Dr.{Doctor.name}</h3>
                    <p className={style.message}>{Doctor.specialization}</p>
                </div>
                <div className={style.buttonSection}>
                      <Link to={`/ViewDoctor/${Doctor.id}`}><div className={style.Btn}>
                     <button className={style.Appointbtn}>View</button>
                    </div></Link> 
                </div>
            </div>
  )
}

export default DoctorCard
