import React, { useState, useEffect } from 'react'
import { getVehicle } from '../scripts/script'

const FourthQ = ({ vehicleId, type, addVehicleId, updateQuestion, qNo }) => {
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
  }, [])

  function handleSubmit() {
    if (!vehicleId) {
      window.alert("Select an option");
      return;
    }
    updateQuestion(qNo + 1)
  }

  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col w-10/12 md:w-1/4 border-white border p-[10px] mt-[5px]'>
        {
          (!flag) ? (<p className='text-xl' >Loading...</p>)
            : (data.length === 0) ? (<p className='text-xl'>No vehicle is available</p>)
              : (<div><p className='font-bold text-xl'>Specific model</p>
                {
                  data.map((model, idx) => {
                    return (
                      <div className='text-xl mt-[5px]' key={idx}>
                        <input onChange={() => addVehicleId(model._id)} name="model" type="radio" /> {model.name}
                      </div>
                    )
                  })
                }
              </div>)
        }
        <button className='btn btn-blue mt-[8px]' onClick={handleSubmit}>Next</button>
      </div>
    </div>
  )
}

export default FourthQ