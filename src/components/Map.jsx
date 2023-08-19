import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import icon from "./Icon"


export default function Map({coordinate}) {
  return (
    <div className='map'>
       <MapContainer center={[coordinate.x, coordinate.y]} zoom={13} scrollWheelZoom={true}  style={{ height: "65vh", width: "100vw",zIndex:"2" }} >
          <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        <Marker icon={icon} position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        </MapContainer>
    </div>
  )
}
