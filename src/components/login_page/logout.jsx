import React from 'react';
import './style.css';
import './mobile.css'
import { useContext } from 'react';

import { Context } from '../context/Context';
const LogoutButton = ({ onClick }) => {


    const {user,dispatch } = useContext(Context);

    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
    }


  return (
    <div className="logout-button-container">
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;