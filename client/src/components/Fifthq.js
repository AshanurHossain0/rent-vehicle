import React from 'react'

const Fifthq = ({ addStartDate, addEndDate, updateQuestion, qNo }) => {

    function handleSubmit() {
        updateQuestion(qNo + 1)
    }

    return (
        <div>
            <div className="start">
                <p>Start Date</p>
                <input type="date" onChange={(e) => { addStartDate(e.target.value) }} />
            </div>
            <div className="start">
                <p>End Date</p>
                <input type="date" onChange={(e) => { addEndDate(e.target.value) }} />
            </div>
            <button onClick={handleSubmit}>Next</button>
        </div>
    );
}

export default Fifthq