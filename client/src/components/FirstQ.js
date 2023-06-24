import React from 'react'

const FirstQ = ({ fName, lName, addfName, addlName, updateQuestion, qNo }) => {

  function handleSubmit() {
    if (!fName || !lName) {
      window.alert("First and last name is mandatory..!!!");
      return;
    }
    const nameRegex = /^[a-z ,.'-]+$/i
    if (!nameRegex.test(fName) || !nameRegex.test(lName)) {
      window.alert("Invalid name..!!!");
      return;
    }
    updateQuestion(qNo + 1)
  }
  return (
    <div className='w-full flex justify-center'>
      <div className='flex flex-col w-10/12 md:w-1/4 border-white border p-[10px] mt-[5px]'>
        <p className='font-bold text-xl mt-[5px]'>What is your name?</p>
        <p className='mt-[15px]' >First Name</p>
        <input  className='text-xl mt-[3px] bg-slate-900 border-white border rounded-sm' name='fName' onChange={(e) => { addfName(e.target.value) }} />
        <p className='mt-[8px]'>Last Name</p>
        <input className='text-xl mt-[3px] bg-slate-900 border-white border rounded-sm' name='lName' onChange={(e) => { addlName(e.target.value) }} />
        <button className='mt-[8px] btn btn-blue' onClick={handleSubmit}>Next</button>
      </div>
    </div>
  )
}

export default FirstQ