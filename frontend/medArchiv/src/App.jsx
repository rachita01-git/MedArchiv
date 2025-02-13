import { useState, useEffect } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import DoctorDashboard from './Components/Doctor/DoctorDashboard';
import DoctorAppointment from './Components/Doctor/DoctorAppointment';
import DoctorAppointmentDetails from './Components/Doctor/DoctorAppointmentDetail';
import DoctorLogo from './Components/Doctor/Logo';
import DoctorMenuList from './Components/Doctor/MenuList';
import DoctorNotification from './Components/Doctor/DoctorNotification';
import EditDoctorProfile from './Components/Doctor/Edit';
import DStatus from './Components/Doctor/DStatus';

import PatientLogo from './Components/Patient/Logo';
import PatientMenuList from './Components/Patient/MenuList';
import FindDoctor from './Components/Patient/FindDoctor';
import PatientAppointment from './Components/Patient/PatientAppointment';
import PatientNotification from './Components/Patient/PatientNotification';
import PatientRecord from './Components/Patient/PatientRecord';
import EditPatientProfile from './Components/Patient/PatientEdit';
import DoctorDetail from './Components/Patient/DoctorDetail';
import ViewDoctor from './Components/Patient/ViewDoctor';
import ViewDoctorNotify from './Components/Patient/ViewDoctorNotify';

import Login from './Components/Login';
import LandingPage from './Components/LandingPage';
import DRegistration from './Components/DRegistration';
import PRegistration from './Components/PRegistration';
import Admin from './Components/Admin/Admin';
import PatientDashboard from './Components/Patient/PatientDashboard'
import ToggleThemeButton from './Components/ToggleThemeButton';
import page404 from './Components/Page404'

const { Sider } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [userType, setUserType] = useState(localStorage.getItem('userType'));
  const toggleTheme = () => setDarkTheme(!darkTheme);

  const userstatus1 = localStorage.getItem('status');
  const userId = localStorage.getItem('userId');


  const renderDoctorRoutes = () => (
    <Layout>
      <Sider theme={darkTheme ? 'dark' : 'light'} className="sidebar">
        <DoctorLogo />
        <DoctorMenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Routes>
        <Route path="/Dashboard" element={<DoctorDashboard />} />
        <Route path="/DoctorAppointment" element={<DoctorAppointment />} />
        <Route path="/DoctorAppointmentDetail/:pid/:aid" element={<DoctorAppointmentDetails />} />
        <Route path="/DoctorNotification" element={<DoctorNotification />} />
        <Route path="/Edit" element={<EditDoctorProfile />} />
      </Routes>
    </Layout>
  );

  const renderPatientRoutes = () => (
    <Layout>
      <Sider theme={darkTheme ? 'dark' : 'light'} className="sidebar">
        <PatientLogo />
        <PatientMenuList darkTheme={darkTheme} />
        <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
      </Sider>
      <Routes>
        <Route path="/Dashboard" element={<PatientDashboard />} />
        <Route path="/edit" element={<EditPatientProfile />} />
        <Route path="/FindDoctor" element={<FindDoctor />} />
        <Route path="/PatientAppointment" element={<PatientAppointment />} />
        <Route path="/PatientNotification" element={<PatientNotification />} />
        <Route path="/PatientRecord" element={<PatientRecord />} />
        <Route path="/DoctorDetail/:id" element={<DoctorDetail />} />
        <Route path="/ViewDoctor/:id" element={<ViewDoctor />} />
        <Route path="/ViewDoctorNotify/:Did/:Aid" element={<ViewDoctorNotify />} />
      </Routes>
    </Layout>
  );

  const renderAdminRoutes = () => (
    <Routes>
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  );
  return (
    <>
      <Routes>
     
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/PatientRegistration" element={<PRegistration />} />
        <Route path="/DoctorRegistration" element={<DRegistration />} />
        {/* <Route path="/*" element={<Navigate to="/"/>} /> */}
      </Routes>

      {userType === 'doctor' ? (
        userstatus1 == "Rejected" ? (
          <Routes>
          <Route path="/Dashboard" element={<DStatus  id={userId }/>} />
            </Routes>
        ) :  userstatus1 == "Pending" ?(
          <Routes>
          <Route path="/Dashboard" element={<DStatus id={userId } />} />
            </Routes>
        ): (
           renderDoctorRoutes() 
        )
      ) : userType === 'patient' ? (
        renderPatientRoutes() 
      ) : (
        renderAdminRoutes() 
      )}
    </>
  );
}

export default App;
