import { Menu } from 'antd';
import { HomeOutlined ,SelectOutlined,NotificationOutlined,HistoryOutlined,LogoutOutlined
} from '@ant-design/icons';
import { Link,useNavigate } from 'react-router-dom';
const MenuList = ({darkTheme}) => {

    const navigate = useNavigate();
    let handel=()=>{
        localStorage.clear();
        navigate("/");
    }

    let dashboard=()=>{
        navigate("/Dashboard");
    }
    let doctorappointment=()=>{
        navigate("/DoctorAppointment");
    }

    let doctorNotification=()=>{
        navigate("/DoctorNotification");   
    }

    return(
        <Menu theme = {darkTheme ? 'dark' : 'light'} mode ="inline" className="menu-bar">
          <Menu.Item key="dashboard" icon={ <HomeOutlined />}onClick={dashboard}>
             Dashboard
            </Menu.Item>
            

             <Menu.Item key="appointment" icon={ <SelectOutlined />}onClick={doctorappointment}>
             Appointments
            </Menu.Item>
           
            
            <Menu.Item key="notification" icon={ <NotificationOutlined />}onClick={doctorNotification}>
             Notifications
            </Menu.Item>

            <Menu.Item key="logout" icon={ <LogoutOutlined /> } onClick={handel}>
             Logout
            </Menu.Item>
            
        </Menu>
    )
}
export default MenuList