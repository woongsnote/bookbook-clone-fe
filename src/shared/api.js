import axios from "axios";

// let api;

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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

// export const userAPI = {
//   emailCheck: (email) => instance.post("/api/member/email", email),

//   nicknameCheck: (nickname) => instance.post("/api/member/nickname", nickname),

//   register: (email, nickname, password) =>
//     instance.post("/api/member/register", { email, nickname, password }),

//   login: (email, password) =>
//     instance.post("/api/member/login", { email, password }),
// };

// Todo
export const bookAPI = {
  searchBooks: (title) =>
    axios.get(
      `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&size=20`,
      { headers: { Authorization: process.env.REACT_APP_KaKaoKEY } }
    ),
};

// export const reviewAPI = {
//   getAllReviews: () => instance.get(""),
// };

export default instance;
