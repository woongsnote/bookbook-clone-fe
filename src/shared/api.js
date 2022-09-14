import axios from "axios";

// let api;

const api = axios.create({
  baseURL: "http://localhost:3001",
});

// export const userAPI = {
//   emailCheck: (email) => instance.get("/api/member/login", email),

//   nicknameCheck: (nickname) => instance.get("/api/member/nickname", nickname),

//   register: (email, nickname, password) =>
//     instance.post("/api/member/register", { email, nickname, password }),

//   login: (email, password) =>
//     instance.post("/api/member/login", { email, password }),
// };

// // Todo
export const bookAPI = {
  searchBooks: (title) =>
    axios.get(
      `https://dapi.kakao.com/v3/search/book?target=title&query=${title}`,
      { headers: { Authorization: process.env.REACT_APP_KaKaoKEY } }
    ),
};

export default api;
