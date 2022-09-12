import axios from "axios";

const instance = axios.create({
  baseURL: "http://locahost:3001",
});

export const localAPI = {
  getBooks: () => instance.get("/books"),
};

export const authAPI = {
  emailCheck: (email) => instance.get("/api/member/login", email),

  nicknameCheck: (nickname) => instance.get("/api/member/nickname", nickname),

  register: (email, nickname, password) =>
    instance.post("/api/member/register", { email, nickname, password }),

  login: (email, password) =>
    instance.post("/api/member/login", { email, password }),
};

// Todo
export const bookAPI = {
  search: () => instance.get(),
};
