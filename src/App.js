import { useState } from 'react';
import Header from './components/Header';
import Map from './components/Map';
import "./css/app.css"

function App() {
  const [coordinate,setCoordinate] = useState({
    x: 51.505,
    y: -0.09
  })

  return (
    <>
      <Header coordinate={coordinate} setCoordinate={setCoordinate}/>
      <Map coordinate={coordinate}/>
    </>
  );
}

export default App;
