import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Style/LandingPage.module.css'
import doctor from '../assets/doctorimg.webp'
import patient from '../assets/patient.webp'
import logo from '../assets/logo.png'
function LandingPage() {
 
  return (
    <div className={style.page}> 
    <div className={style.div1}>
<img src={patient} alt="" />
    </div>
    <div className={style.div2}>
      <img src={logo} alt=""  />
      <h1>MedArchiv</h1>
      <div className={style.inner}>
    <Link to="/DoctorRegistration"><button>Doctor Registration</button></Link>
    <Link to="/PatientRegistration"><button>Patient Registration</button></Link>
    <Link to="/Login"><button>Login</button></Link>
    </div>
    </div>
    <div className={style.div3}></div>
    <img src={doctor} alt="" />
    </div>
  )
}

export default LandingPage
