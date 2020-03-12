import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='container'>
        <div className='nav-columns'>
          <div className='nav-column'>
            <div className='nav-label' style={{
              marginTop:"100px"
            }}>Menu</div>
            <ul className='nav-links'>  
              <li>
                <NavLink to='/services' exact>
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to='/about-us' exact>
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className='nav-column'>
            <div className='nav-label'>Contact</div>
            <div className='nav-infos'>
              <ul className='nav-info'>
                <li className='nav-info-label'>Email</li>
                <li>
                  <NavLink to='/contact' exact>
                    Stay Connected
                  </NavLink>
                </li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Main Branch</li>
                <li>Via Andrea 36</li>
                <li>Torino</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>LandLine</li>
                <li>+39 (9) 89 422 45 65</li>
              </ul>
              <ul className='nav-info'>
                <li className='nav-info-label'>Legal</li>
                <li>Privacy & Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
