import React, { useState } from 'react'

const FirstQ = ({ addfName, addlName, updateQuestion, qNo }) => {

  function handleSubmit() {
    updateQuestion(qNo+1)
  }
  return (
    <div>
      <h1>What is your name?</h1>
      <p>First Name</p>
      <input name='fName' onChange={(e) => { addfName(e.target.value) }} />
      <p>Last Name</p>
      <input name='lName' onChange={(e) => { addlName(e.target.value) }} />
      <button onClick={handleSubmit}>Next</button>
    </div>
  )
}

export default FirstQ