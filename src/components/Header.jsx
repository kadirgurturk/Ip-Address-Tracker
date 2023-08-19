import React, { useState,useEffect } from 'react'
import logo1 from "../assets/pattern-bg-desktop.png"
import arrow from "../assets/arrow.svg";
import axios from 'axios';

export default function Header({coordinate, setCoordinate}) {
    const [val, setVal]= useState();
    const [info, setInfo] = useState();
    const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/

    useEffect(() => {
        const getInitialData = async () => {
            try {
              const response = await axios.get(
                `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=8.8.8.8`
              );
              const data = response.data;
              setInfo(data);
              setCoordinate({
                x:info.location.lat,
                y:info?.location.lng
              })
            } catch (error) {
              console.error(error);
            }
          };
      
          getInitialData();
      },[])
    

      const handleClick = async () => {
        try {
          const response = await axios.get(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&${
              checkIpAddress.test(val)
                ? `ipAddress=${val}`
                : checkDomain.test(val)
                ? `domain=${val}`
                : ""
            }`
          );
          const data = response.data;
          setInfo(data);
          setCoordinate({
                x:info.location.lat,
                y:info?.location.lng
              })
        } catch (error) {
          console.error(error);
        }
      };

      console.log(`https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_GEO_API_KEY}&ipAddress=8.8.8.8`);
    
    

  return (
    <div className='header' style={{backgroundImage:`url(${logo1})`}}>
        <div className="header-container">
            <h2>IP Address Tracker</h2>
            <div className="header-input">
                <input type="text" placeholder='search for ıp address' onChange={(e)=>{setVal(e.target.value)}} value={val}  />
                <button><img src={arrow} alt="arrow" onClick={()=>{handleClick()}} /></button>
            </div>

            <div className="header-info">
                <div className="address header-info-items"> 
                    <p className="info-header">IP ADDRESS</p>
                    <p className="info-content">  {info?.ip} </p>
                </div>
                <div className="location header-info-items">
                    <p className="info-header">LOCATION</p>
                     <p className="info-content"> {info?.locationinfo.city}, {info?.location.region} </p>
                </div>
                <div className="timezone header-info-items">
                    <p className="info-header">TIMEZONE</p>
                    <p className="info-content">UTC {info?.location.timezone}</p>
                </div>
                <div className="ısp header-info-items">     
                    <p className="info-header">ISP</p>
                    <p className="info-content"> {info?.isp}</p>
                </div>
            </div>
        </div>
    </div>
  )
}
