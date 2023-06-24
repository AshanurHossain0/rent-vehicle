import React from 'react'

const SecondQ = ({ wheels, addWheels, updateQuestion, qNo }) => {
    function handleSubmit() {
        if (!wheels) {
            window.alert("Select an option");
            return;
        }
        updateQuestion(qNo + 1)
    }
    return (
        <div className='w-full flex justify-center'>
            <div className='flex flex-col w-10/12 md:w-1/4 border-white border p-[10px] mt-[5px]'>
                <p className='font-bold text-xl '>Number of wheels</p>
                <label className='text-xl mt-[8px] flex flex-col' htmlFor="wheels">
                    <p><input name="wheels" value='2' type="radio" onChange={() => addWheels(2)} /> 2</p>
                    <p><input name="wheels" value='4' type="radio" onChange={() => addWheels(4)} /> 4</p>
                </label>
                <button className='mt-[5px] btn btn-blue' onClick={handleSubmit}>Next</button>
            </div>
        </div>
    )
}

export default SecondQ