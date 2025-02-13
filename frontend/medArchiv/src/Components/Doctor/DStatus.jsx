import React, { useEffect, useState } from 'react';
import female from '../../assets/female.png';
import style from '../../Style/DoctorCss/DStatus.module.css';

function DStatus({ id }) {
  const [Doctor, setDoctor] = useState(null); // Initialize state as null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await (await fetch(`http://localhost:8080/Doctorapi/Doctor/${id}`)).json();
        setDoctor(res);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!Doctor) {
    return <div>Loading...</div>; // Show loading message while data is being fetched
  }

  return (
    <div>
      <div className={style.PCard}>
        <div className={style.imagecard}>
          <div className={style.img}>
            <img src={female} alt={`Dr. ${Doctor.name}'s portrait`} /> {/* Add meaningful alt text */}
          </div>
          <div className={style.name}>
            <h2>Dr.{Doctor.name}</h2>
            <p>{Doctor.specialization}</p>
          </div>
        </div>
        <div className={style.detail}>
          <div className={style.info}>
            <h3>Your Details</h3>
            <table className={style.table}>
              <tbody>
                <tr>
                  <td className={style.data}>Qualification</td>
                  <td>{Doctor.qualification}</td>
                </tr>
                <tr>
                  <td className={style.data}>Experience</td>
                  <td>{Doctor.experience} year</td>
                </tr>
                <tr>
                  <td className={style.data}>Licence number</td>
                  <td>{Doctor.licenceNumber}</td>
                </tr>
                <tr>
                  <td className={style.data}>Area of Practice</td>
                  <td>{Doctor.areaOfPractice}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style.status}>
            <h3>Status : </h3>
            <div>
              <h1>{Doctor.status}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DStatus;
