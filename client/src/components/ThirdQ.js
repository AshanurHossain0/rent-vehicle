import React, { useState, useEffect } from 'react'
import { getVehicle } from '../scripts/script'

const ThirdQ = ({ type, wheels, addType, updateQuestion, qNo }) => {
  const [data, setData] = useState([])
  const [flag, setFlag] = useState(false)
  function handleSubmit() {
    if (!type) {
      window.alert("Select an option");
      return;
    }
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
  }, [])
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col w-10/12 md:w-1/4 border-white border p-[10px] mt-[5px]'>
        {
          (!flag) ? (<p className=' text-xl'>Loading...</p>)
            : (data.length === 0) ? (<p className=' text-xl'>No vehicle is available</p>)
              : (<div  ><h2 className='font-bold text-xl'>Type of vehicle</h2>
                {
                  data.map((type, idx) => {
                    return (
                      <div className='text-xl mt-[5px]' key={idx}>
                        <input value="type" onChange={() => addType(type)} name="type" type="radio" /> {type}
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

export default ThirdQ