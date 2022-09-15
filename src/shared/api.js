import axios from "axios";

// let api;

const instance = axios.create({
  // 서버용
  // baseURL: process.env.REACT_APP_API_URL,
  // 로컬용
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
    withCredentials: true,
  },
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = sessionStorage.getItem("Access_token");
    const refreshToken = sessionStorage.getItem("Refresh_token");
    if (accessToken !== null && refreshToken !== null) {
      config.headers.common["authorization"] = `${accessToken}`;
      config.headers.common["Refresh-token"] = `${refreshToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Todo
export const bookAPI = {
  searchBooks: (title) =>
    axios.get(
      `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&size=20`,
      { headers: { Authorization: process.env.REACT_APP_KaKaoKEY } }
    ),
};

export default instance;
