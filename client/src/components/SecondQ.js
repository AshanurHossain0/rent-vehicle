import React from 'react'

const SecondQ = ({wheels, addWheels, updateQuestion, qNo }) => {
    function handleSubmit() {
        if(!wheels){
            window.alert("Select an option");
            return;
        }
        updateQuestion(qNo + 1)
    }
    return (
        <div>
            <h1>Number of wheels</h1>
            <label htmlFor="wheels">
                <input name="wheels" value='2' type="radio" onChange={()=>addWheels(2)}  />2
                <input name="wheels" value='4' type="radio" onChange={()=>addWheels(4)}  />4
            </label>
            <button onClick={handleSubmit}>Next</button>
        </div>
    )
}

export default SecondQ