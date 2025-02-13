import React, { useEffect, useState } from "react";
import style from '../../Style/AdminCss/Admin.module.css'
import AdminMenuList from './ManuList'
import ToggleThemeButton from '../ToggleThemeButton'
import { Layout } from 'antd';
import Sider from "antd/es/layout/Sider";
import DoctorLogo from "../Doctor/Logo"
const Admin = () => {

  const [requests, setRequests] = useState([]);


  useEffect(async () => {
    const res = await (await fetch("http://localhost:8080/Doctorapi/Doctors")).json();
    setRequests(res);
  }, [])




  const handleStatusChange = (id, newStatus) => {

    let updatedata = async () => {
      const req = await fetch(`http://localhost:8080/Doctorapi/UpdateStatus/${id}`, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: newStatus
      })

    }
    updatedata();
    setRequests((prevRequests) =>
      prevRequests.map((req) => (req.id === id ? { ...req, status: newStatus } : req))

    );
  };
  const [darkTheme, setDarkTheme] = useState(true)
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  }
  return (
    <>
      <Layout>
        <Sider theme={darkTheme ? 'dark' : 'light'} className="sidebar">
          <DoctorLogo />
          <AdminMenuList darkTheme={darkTheme} />
          <ToggleThemeButton darkTheme={darkTheme}
            toggleTheme={toggleTheme} />
        </Sider>

        <div className={style.container}>
          {/* <AdminMenuList/> */}
          <h1 className={style.title}>Doctor Approval Requests</h1>
          <table className={style.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Qualification</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {requests.map((request) => (
                <tr key={request.id}>
                  <td>{request.name}</td>
                  <td>{request.qualification}</td>
                  <td>
                    <span className={style[request.status]} id={style.status}>{request.status}</span>
                  </td>
                  <td className={style.block}>
                    {request.status === "Pending" && (
                      <div className={style.actions}>
                        <button onClick={() => handleStatusChange(request.id, "Approved")} className={style.button} id={style.approve}>
                          Approve
                        </button>
                      </div>
                    )}
                     <button onClick={() => handleStatusChange(request.id, "Rejected")} className={style.button} id={style.reject}>
                          Reject
                        </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Layout>
    </>
  );
};

export default Admin;