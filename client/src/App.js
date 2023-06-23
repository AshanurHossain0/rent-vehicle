
import react, { useState } from 'react';
import './App.css';
import FirstQ from './components/FirstQ';
import SecondQ from './components/SecondQ';
import ThirdQ from './components/ThirdQ';
import FourthQ from './components/FourthQ';

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

  function handleSubmit() {
    console.log(fName, lName, wheels, type, vehicleId);
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
        default:
          return <button onClick={handleSubmit}>Submit</button>
      }
    })()
    // }
  )

}


export default App;
