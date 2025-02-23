import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { TiThMenu } from 'react-icons/ti';
import Cookies from 'js-cookie';
import { UserContext } from '../data/UserProvider';
import logo from '../assets/homepg/headerLogo.png';
import PP from '../assets/homepg/header-profile-pic.jpg';
import '../css/Header.css';

const Header = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    Cookies.remove('user');
    navigate('/');
  };

  const ViewProfile = () => {
    navigate('/myProfile');
  };

  return (
    <header className='header-container'>
      <input type='checkbox' id='check' />
      <label htmlFor='check' className='menu-icon'>
        <TiThMenu />
      </label>

      <div className='header-logo'>
        <Link to='/'>
          <img src={logo} alt='Health Hub Logo' />
        </Link>
        <h2>Health-Hub</h2>
      </div>

      <nav className='header-list'>
        <ul>
          <li>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/docAppointment' className='link'>
              All Doctors
            </Link>
          </li>
          <li>
            <Link to='/about' className='link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/contact' className='link'>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>

      {user ? (
        <div className='dropdown'>
          <div className='profile'>
            <img src={PP} alt='User Profile' className='profile-pic' />
            <h4>{user.name}</h4>
          </div>
          <div className='dropdown-content'>
            <ul>
              <li onClick={ViewProfile}>Profile</li>
              <li>
                <Link to='/myappointment' className='link'>
                  My Appointment
                </Link>
              </li>
              <li onClick={handleLogout}>Logout</li>
            </ul>
          </div>
        </div>
      ) : (
        <Link to='/login' className='login-btn'>
          Login
        </Link>
      )}
    </header>
  );
};

export default Header;
