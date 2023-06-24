import React from 'react'
import { isGreater } from '../scripts/script';

const FifthQ = ({startDate, endDate, addStartDate, addEndDate, updateQuestion, qNo }) => {

    function handleSubmit() {
        if(!startDate || !endDate){
            window.alert("select start and end date");
            return;
        }
        if(!isGreater(startDate) || !isGreater(endDate)){
            window.alert("Expired start or end date");
            return;
        }
        if(!isGreater(endDate,startDate)){
            window.alert("Start date can't be greater than end date");
            return;
        }
        
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

export default FifthQ