import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
});

// export const localAPI = {
//   getBooks: () => instance.get('/books'),
// };

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

export default api;
