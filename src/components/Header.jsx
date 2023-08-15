import React from 'react'
import logo1 from "../assets/pattern-bg-desktop.png"

export default function Header() {
  return (
    <div className='header' style={{backgroundImage:`url(${logo1})`}}>
        <h2>IP Address Tracker</h2>
        <div className="header-input">
            <input type="text" />
            <button></button>
        </div>

        <div className="header-info">
            <div className="address header-info-items"> 
                <p className="info-header"></p>
                <p className="info-content"></p>
            </div>
            <div className="location header-info-items">
                <p className="info-header"></p>
                 <p className="info-content"></p>
            </div>
            <div className="timezone header-info-items">
                <p className="info-header"></p>
                <p className="info-content"></p>
            </div>
            <div className="ısp header-info-items">     
                <p className="info-header"></p>
                <p className="info-content"></p>
            </div>
        </div>
    </div>
  )
}
