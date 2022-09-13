import axios from "axios";

const BaseURL = "http://locahost:3001/api";

const api = axios.create({
  baseURL: BaseURL,
});

export default api;

// export const localAPI = {
//   getBooks: () => instance.get("/books"),
// };

// export const userAPI = {
//   emailCheck: (email) => instance.get("/api/member/login", email),

//   nicknameCheck: (nickname) => instance.get("/api/member/nickname", nickname),

//   register: (email, nickname, password) =>
//     instance.post("/api/member/register", { email, nickname, password }),

//   login: (email, password) =>
//     instance.post("/api/member/login", { email, password }),
// };

// // Todo
// export const bookAPI = {
//   search: () => instance.get(),
// };
