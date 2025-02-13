import "react"
import {FireFilled} from '@ant-design/icons'
import female from '../../assets/female.png'
import male from '../../assets/male.png'

const Logo = () => {
    return (
        <div className="logo">
            <div className="logo-icon">
                {/* <FireFilled/> */}
                <img src={male} style={{width:"5rem",marginTop:"3rem"}} alt="Logo" />
                </div>
                </div>
        
    );
};
export default Logo;