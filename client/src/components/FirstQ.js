import React from 'react'

const FirstQ = ({fName,lName,addfName, addlName, updateQuestion, qNo }) => {

  function handleSubmit() {
    if(!fName || !lName) {
      window.alert("First and last name is mandatory..!!!");
      return;
    }
    const nameRegex = /^[a-z ,.'-]+$/i
    if(!nameRegex.test(fName) || !nameRegex.test(lName)){
      window.alert("Invalid name..!!!");
      return;
    }
    updateQuestion(qNo+1)
  }
  return (
    <div>
      <h1>What is your name?</h1>
      <p>First Name</p>
      <input className='bg-slate-900 border-white border' name='fName' onChange={(e) => { addfName(e.target.value) }} />
      <p>Last Name</p>
      <input className='bg-slate-900 border-white border' name='lName' onChange={(e) => { addlName(e.target.value) }} />
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default FirstQ