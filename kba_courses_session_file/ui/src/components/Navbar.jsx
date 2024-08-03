
import { Link } from 'react-router-dom';
import logo from '../assets/images/kbalogo.png'
import '../App.css'
import Logout from './Logout';
const Navbar = () => {
    return (
        <>
             <div className='navbar'>
            <div className='logo-container'>
                <Link to="/" >
                    <img className='logo' src={logo} alt="logo" />
                </Link>
            </div>
            <div className='nav-links'>
                <Link to="/" className='home-link'>Home</Link>
                <Link to="/courses" className='courses-link'>Courses</Link>
                <Link to="/contact" className='contact-link'>Contact Us</Link>
                <Link to="/add-course" className='add-course-link'>Add Course</Link>
                <Logout />
            </div>
        </div>
        </>
    )
}

export default Navbar;