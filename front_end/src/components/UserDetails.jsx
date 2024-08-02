import React, { useState, useContext, useEffect } from 'react'
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiCityBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { FaSignOutAlt } from "react-icons/fa";
import { AuthContext } from '../store/AuthContext'
import { Logout } from '../Global/apiCall';
// import { UserProfile } from '../Global/apiCall';


const UserDetails = () => {
  const { logout,Details } = useContext(AuthContext);
  const LogoutUser = () => {
    Logout();
    logout();
    window.location.reload()
  }

  return (
    <>
      <div style={{zIndex:'100'}} className="user-detail">
        <div className='user-detail-content'>
          <FaUser style={{ color: "slategray", marginTop: '4px' }} />
          {Details ? <p style={{ fontWeight: 400 }}>{Details.fullname}</p> : <p>No user details found</p>}
        </div>
        <div className='user-detail-content'>
          <MdEmail style={{ color: "slategray", marginTop: '4px' }} />
          {Details ? <p style={{ fontWeight: 400 }}>{Details.email}</p> : <p>No user details found</p>}
        </div>
        <div className='user-detail-content'>
          <FaPhoneAlt style={{ color: "slategray", marginTop: '4px' }} />
          {Details ? <p style={{ fontWeight: 400 }}>{Details.phone}</p> : <p>No user details found</p>}
        </div>
        <div className='user-detail-content'>
          <FaLocationDot style={{ color: "slategray", marginTop: '4px' }} />
          {Details ? <p style={{ fontWeight: 400, textAlign: "left" }}>{Details.address.streetAddress}, {Details.address.city}, {Details.address.state},<br /> {Details.address.country}, {Details.address.postalCode}</p> : <p>No user details found</p>}
        </div>
        <div className="user-detail-content">
          <FaSignOutAlt style={{ color: "slategray", marginTop: '4px' }} />
          <p style={{ cursor: 'pointer' }} onClick={LogoutUser}>sign out</p>
        </div>

      </div>
    </>
  )
}

export default UserDetails