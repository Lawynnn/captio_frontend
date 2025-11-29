import axios from "axios";
const instace = axios.create({
    baseURL: process.env.API_ENDPOINT,
    headers: {
        "x-captio-token": `${process.env.SECRET_TOKEN}`,
    },
});
export default instace;
