import axios from "axios"

export const getVehicle = async (query) => {
    const config = {
        headers: { "Content-Type": "application/json" },
        params: query
    }
    try {
        const res = await axios.get('http://localhost:3001/vehicle', config)
        let arr = res.data.data;
        if (arr.length === 0 || query.wheels === undefined) return arr;
        let arr2 = [];
        for (let i = 0; i < arr.length; i++) {
            arr2.push(arr[i].type);
        }
        arr2 = new Set(arr2);
        arr2 = [...arr2]
        return arr2;
    }
    catch (err) {
        window.alert(err.message)
    }
}
export const bookVehicle = async (vehicleId, bodyData) => {
    const config = {
        headers: { "Content-Type": "application/json" },
    }
    const body = JSON.stringify(bodyData);
    try {
        const res = await axios.post(`http://localhost:3001/book/${vehicleId}`, body, config)
        return res;
    }
    catch (err) {
        window.alert(err.message)
    }
}



// date comparison
export const isGreater = (date1, date2) => {
    let [y1, m1, d1] = date1.split("-")
    y1=Number(y1); m1=Number(m1); d1=Number(d1);
    console.log(y1,m1,d1);
    if(!date2){
        let today = new Date().toLocaleDateString();
        let [m2, d2, y2]= today.split("/");
        y2=Number(y2); m2=Number(m2); d2=Number(d2);
        console.log(y2,m2,d2);
        if(y1>y2) return true;
        else if(y1<y2) return false;
        else{
            if(m1>m2) return true;
            else if(m1<m2) return false;
            else{
                if(d1<d2) return false;
                else return true;
            }
        }
    }
    else{
        let [y2, m2, d2] = date2.split("-")
        y2=Number(y2); m2=Number(m2); d2=Number(d2);
        if(y1>y2) return true;
        else if(y1<y2) return false;
        else{
            if(m1>m2) return true;
            else if(m1<m2) return false;
            else{
                if(d1<d2) return false;
                else return true;
            }
        }
    }
}