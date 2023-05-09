import { Link } from "react-router-dom";
import logo from '../../assets/images/more/logo1.png'
import './Header.css'

const Header = () => {
    return (
        <header id="header" className="flex justify-center items-center">
            <div className="flex items-center justify-center">
                <img src={logo}  style={{width: '75px', height: '90px'}} alt="logo" />
                <Link to="/" className=" text-3xl md:text-6xl text-White ">Espresso Emporium</Link>
            </div>
        </header>
    );
};

export default Header;