import React, { useEffect } from 'react'
import { getVehicle } from '../scripts/script'

const ThirdQ = ({wheels, setType, updateQuestion, qNo }) => {
    useEffect(()=>{
      getVehicle({wheels:wheels})
      .then((res)=>{
        console.log(res);
      })
      .catch((err)=>{
        console.log(err.message);
      })
    })
  return (
    <div>
        <h1>Type of vehicle</h1>
        
    </div>
  )
}

export default ThirdQ