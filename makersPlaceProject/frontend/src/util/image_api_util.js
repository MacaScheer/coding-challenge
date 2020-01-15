import axios from "axios";

export const getImages = (startIdx) => {
    debugger
    return axios.get(`/api/images/${startIdx}`)
}