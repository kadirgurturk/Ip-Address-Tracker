import React, { useState } from 'react'
import logo1 from "../assets/pattern-bg-desktop.png"
import arrow from "../assets/arrow.svg";
import axios from 'axios';

export default function Header() {
    const [val, setVal]= useState();
    const [info, setInfo] = useState();
    const [ıp, setIp] = useState();
    

    const handleClick = () =>{
        
    }
    

  return (
    <div className='header' style={{backgroundImage:`url(${logo1})`}}>
        <div className="header-container">
            <h2>IP Address Tracker</h2>
            <div className="header-input">
                <input type="text" placeholder='search for ıp address' onChange={(e)=>{setVal(e.target.value)}} value={val}  />
                <button><img src={arrow} alt="arrow" onClick={handleClick} /></button>
            </div>

            <div className="header-info">
                <div className="address header-info-items"> 
                    <p className="info-header">IP ADDRESS</p>
                    <p className="info-content">8.8.8.8</p>
                </div>
                <div className="location header-info-items">
                    <p className="info-header">LOCATION</p>
                     <p className="info-content">Çanakkale, Çanakkale Merkez/Çanakkale </p>
                </div>
                <div className="timezone header-info-items">
                    <p className="info-header">TIMEZONE</p>
                    <p className="info-content">URC-7.00</p>
                </div>
                <div className="ısp header-info-items">     
                    <p className="info-header">ISP</p>
                    <p className="info-content">37.38605</p>
                </div>
            </div>
        </div>
    </div>
  )
}
