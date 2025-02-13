import { Menu } from 'antd';
import { HomeOutlined ,SelectOutlined,NotificationOutlined,HistoryOutlined,LogoutOutlined
} from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
const MenuList = ({darkTheme}) => {
   
   const navigate = useNavigate();
    let handel=()=>{
        localStorage.clear();
        navigate("/");
    }
    return(
        <Menu theme = {darkTheme ? 'dark' : 'light'} mode ="inline" className="menu-bar">
          <Menu.Item key="dashboard" icon={ <HomeOutlined />}>
             Dashboard
            </Menu.Item>
            <Menu.Item key="logout" icon={ <LogoutOutlined /> } onClick={handel}>
             Logout
            </Menu.Item>
            
        </Menu>
    )
}
export default MenuList