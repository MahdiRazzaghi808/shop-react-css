import axios from "axios"
const BASE_URL = 'https://fakestoreapi.com'

const getData = async (endPoint) => {
    const response = await axios.get(`${BASE_URL}${endPoint}`)
   
    return response.data
}

export { getData }