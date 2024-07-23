import React, { useState,useContext } from 'react'
import { AuthContext } from '../store/AuthContext'


const UserDetails = ({userDetail}) => {
    const {logout}=useContext(AuthContext);
  return (
    <>
        <div className="user-detail">
            <button onClick={logout}>sign out</button>
        </div>
    </>
  )
}

export default UserDetails