import axios from "axios"

export const getVehicle = async (query) => {
    const config = {
        headers: {"Content-Type": "application/json"},
        params:query
    }
    try {
        const res = await axios.get('http://localhost:3001/vehicle',config)
        return res;
    }
    catch (err) {
        alert(err.message)
    }
}