
import React, { useState } from 'react';
import './App.css';
import { bookVehicle } from './scripts/script';

import FirstQ from './components/FirstQ';
import SecondQ from './components/SecondQ';
import ThirdQ from './components/ThirdQ';
import FourthQ from './components/FourthQ';
import FifthQ from './components/FifthQ';

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
      console.log(err);
      window.alert(err.message)
    })
  }


  return (
    // {
    (() => {
      switch (qNo) {
        case 1:
          return <FirstQ fName={fName} lName={lName} addfName={addfName} addlName={addlName} updateQuestion={updateQuestion} qNo={qNo} />

        case 2:
          return <SecondQ wheels={wheels} addWheels={addWheels} updateQuestion={updateQuestion} qNo={qNo} />

        case 3:
          return <ThirdQ type={type} wheels={wheels} addType={addType} updateQuestion={updateQuestion} qNo={qNo} />

        case 4:
          return <FourthQ vehicleId={vehicleId} type={type} addVehicleId={addVehicleId} updateQuestion={updateQuestion} qNo={qNo} />
        case 5:
          return <FifthQ startDate={startDate} endDate={endDate} addStartDate={addStartDate} addEndDate={addEndDate} updateQuestion={updateQuestion} qNo={qNo} />
        default:
          return <div className='w-full flex justify-center'>
            <div className='flex flex-col w-10/12 md:w-1/4 border-white border p-[10px] mt-[5px]'>
              <p className='text-xl font-bold'> Final Submit</p>
              <button className='btn btn-blue mt-[10px]' onClick={handleSubmit}>Submit</button>
            </div>
          </div>
      }
    })()
    // }
  )

}


export default App;
