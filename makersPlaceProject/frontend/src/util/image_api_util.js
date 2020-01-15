import axios from "axios";

export const getImages = (startIdx) => {
    return axios.get(`/api/images/${startIdx}`)
}