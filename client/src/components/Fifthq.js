import React from 'react'
import { isGreater } from '../scripts/script';

const FifthQ = ({ startDate, endDate, addStartDate, addEndDate, updateQuestion, qNo }) => {

    function handleSubmit() {
        if (!startDate || !endDate) {
            window.alert("select start and end date");
            return;
        }
        if (!isGreater(startDate) || !isGreater(endDate)) {
            window.alert("Expired start or end date");
            return;
        }
        if (!isGreater(endDate, startDate)) {
            window.alert("Start date can't be greater than end date");
            return;
        }

        updateQuestion(qNo + 1)
    }

    return (
        <div className='w-full flex justify-center'>
            <div className='flex flex-col w-10/12 md:w-1/4 border-white border p-[10px] mt-[5px]' >
                <p className='font-bold text-xl '>Select start and end date</p>
                <div className='mt-[5px]'>
                    <p>Start Date</p>
                    <input className='text-xl w-full bg-slate-500' type="date" onChange={(e) => { addStartDate(e.target.value) }} />
                </div>
                <div className='mt-[5px]' >
                    <p>End Date</p>
                    <input className='text-xl w-full bg-slate-500' type="date" onChange={(e) => { addEndDate(e.target.value) }} />
                </div>
                <button className='mt-[10px] btn btn-blue' onClick={handleSubmit}>Next</button>
            </div>
        </div>
    );
}

export default FifthQ