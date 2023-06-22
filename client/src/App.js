
import react, { useState } from 'react';
import './App.css';
import FirstQ from './components/FirstQ';

function App() {

  const [qNo, setqNo] = useState(1);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [wheels, setWheels] = useState(0);
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function updateQuestion(no) { setqNo(no) }
  function addfName(fName) { setfName(fName) }
  function addlName(lName) { setlName(lName) }



  return (
    // {
    (() => {
      switch (qNo) {
        case 1:
          return <FirstQ addfName={addfName} addlName={addlName} updateQuestion={updateQuestion} qNo={qNo} />
        case 2:
          return <>Second</>
        case 3:
          return <>Third</>
        case 4:
          return <>Fourth</>
        default:
          return <>Fifth</>
      }
    })()
  // }
  )

}


export default App;
