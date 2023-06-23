
import React, { useState } from 'react';
import './App.css';
import { bookVehicle } from './scripts/script';

import FirstQ from './components/FirstQ';
import SecondQ from './components/SecondQ';
import ThirdQ from './components/ThirdQ';
import FourthQ from './components/FourthQ';
import Fifthq from './components/Fifthq';

function App() {

  const [qNo, setqNo] = useState(1);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [wheels, setWheels] = useState(0);
  const [type, setType] = useState("");
  const [vehicleId, setVehicleId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function updateQuestion(no) { setqNo(no) }
  function addfName(fName) { setfName(fName) }
  function addlName(lName) { setlName(lName) }
  function addWheels(wheels) { setWheels(wheels) }
  function addType(type) { setType(type) }
  function addVehicleId(vehicleId) { setVehicleId(vehicleId) }
  function addStartDate(date) { setStartDate(date) }
  function addEndDate(date) { setEndDate(date) }

  async function handleSubmit() {
    const bodyData={fName, lName, wheels, type,startDate, endDate}
    bookVehicle(vehicleId,bodyData)
    .then((res)=>{
      window.alert("Booking successful")
      setqNo(1);
    })
    .catch((err)=>{
      window.alert(err.message)
    })
  }


  return (
    // {
    (() => {
      switch (qNo) {
        case 1:
          return <FirstQ addfName={addfName} addlName={addlName} updateQuestion={updateQuestion} qNo={qNo} />

        case 2:
          return <SecondQ addWheels={addWheels} updateQuestion={updateQuestion} qNo={qNo} />

        case 3:
          return <ThirdQ wheels={wheels} addType={addType} updateQuestion={updateQuestion} qNo={qNo} />

        case 4:
          return <FourthQ type={type} addVehicleId={addVehicleId} updateQuestion={updateQuestion} qNo={qNo} />
        case 5:
          return <Fifthq addStartDate={addStartDate} addEndDate={addEndDate} updateQuestion={updateQuestion} qNo={qNo} />
        default:
          return <button onClick={handleSubmit}>Submit</button>
      }
    })()
    // }
  )

}


export default App;
