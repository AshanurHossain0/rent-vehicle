import axios from "axios"

export const getVehicle = async (query) => {
    const config = {
        headers: {"Content-Type": "application/json"},
        params:query
    }
    try {
        const res = await axios.get('http://localhost:3001/vehicle',config)
        let arr=res.data.data;
        console.log(arr);
        if(arr.length===0 || query.wheels===undefined) return arr;
        let arr2=[];
        for(let i=0;i<arr.length;i++){
            arr2.push(arr[i].type);
        }
        arr2=new Set(arr2);
        arr2=[...arr2]
        return arr2;
    }
    catch (err) {
        window.alert(err.message)
    }
}
export const bookVehicle = async (vehicleId,bodyData) => {
    const config = {
        headers: {"Content-Type": "application/json"},
    }
    const body = JSON.stringify(bodyData);
    try {
        console.log(vehicleId,bodyData);
        const res = await axios.post(`http://localhost:3001/book/${vehicleId}`,body,config)
        return res;
    }
    catch (err) {
        window.alert(err.message)
    }
}