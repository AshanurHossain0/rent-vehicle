import React, {useState, useEffect } from 'react'
import { getVehicle } from '../scripts/script'

const FourthQ = ({type, addVehicleId, updateQuestion, qNo}) => {
  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)
  useEffect(() => {
    getVehicle({ type: type })
      .then((res) => {
        setData(res);
        setFlag(true)
      })
      .catch((err) => {
        console.log(err.message);
      })
  },[])

  function handleSubmit() {
    updateQuestion(qNo + 1)
  }

  return (
    <div>
      {
        (!flag) ? (<h2>Loading...</h2>)
          : (data.length === 0) ? (<h2>No vehicle is available</h2>)
            : (<div><h2>Specific model</h2>
              {
                data.map((model, idx) => {
                  return (
                    <div key={idx}>
                      <input  onChange={() => addVehicleId(model._id)} name="model" type="radio" />{model.name}
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

export default FourthQ