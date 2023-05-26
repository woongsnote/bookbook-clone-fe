import axios, { AxiosInstance } from "axios";

const BASE_URL = "https://dapi.kakao.com";

const bookAPI: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: process.env.REACT_APP_KaKaoKEY!!
    }
})

export default bookAPI