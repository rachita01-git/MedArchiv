import { Menu } from 'antd';
import { HomeOutlined ,SelectOutlined,NotificationOutlined,HistoryOutlined,LogoutOutlined
} from '@ant-design/icons';
import { Link ,useNavigate} from 'react-router-dom';
const MenuList = ({darkTheme}) => {


    const navigate = useNavigate();
    let handel=()=>{
        localStorage.clear();
        navigate("/");
    }

    let dashboard=()=>{
        navigate("/Dashboard");
    }
    let PatientNotification=()=>{
        navigate("/PatientNotification");
    }

    let PatientAppointment=()=>{
        navigate("/PatientAppointment");   
    }
    let findDoctor=()=>{
        navigate("/FindDoctor");   
    }



    return(
        <Menu theme = {darkTheme ? 'dark' : 'light'} mode ="inline" className="menu-bar">
         <Menu.Item key="dashboard" icon={ <HomeOutlined />}onClick={dashboard}>
             Dashboard
            </Menu.Item>
            
           <Menu.Item key="FindDoctor" icon={ <SelectOutlined />}onClick={findDoctor}>
            FindDoctor
            </Menu.Item>
          

             <Menu.Item key="appointment" icon={ <SelectOutlined />}onClick={PatientAppointment}>
             Appointments
            </Menu.Item>
           
            
           <Menu.Item key="notification" icon={ <NotificationOutlined />}onClick={PatientNotification}>
             Notifications
            </Menu.Item>
             
            {/* <Link to="/PatientRecord"><Menu.Item key="history" icon={ <HistoryOutlined />}>
            Record
            </Menu.Item>
            </Link> */}

            <Menu.Item key="logout" icon={ <LogoutOutlined /> } onClick={handel}>
             Logout
            </Menu.Item>
            
        </Menu>
    )
}
export default MenuList