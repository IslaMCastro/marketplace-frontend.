import axios from "axios";

const BASE_URL = "http://localhost/api" 


const api = axios.create({
    BASE_URL,
})

export default api;
