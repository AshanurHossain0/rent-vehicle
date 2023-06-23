import React, { useState, useEffect } from 'react'
import { getVehicle } from '../scripts/script'

const ThirdQ = ({ wheels, addType, updateQuestion, qNo }) => {
  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)
  function handleSubmit() {
    updateQuestion(qNo + 1)
  }
  useEffect(() => {
    getVehicle({ wheels: wheels })
      .then((res) => {
        setData(res);
        setFlag(true)
      })
      .catch((err) => {
        console.log(err.message);
      })
  },[])
  return (
    <div>
      {
        (!flag) ? (<h2>Loading...</h2>)
          : (data.length === 0) ? (<h2>No vehicle is available</h2>)
            : (<div><h2>Type of vehicle</h2>
              {
                data.map((type, idx) => {
                  return(
                  <div key={idx}>
                    <input value="type" onChange={() => addType(type)} name="type" type="radio" />{type}
                  </div>
                  )
                })
              }
            </div>)
      }
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default ThirdQ