import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001"
      : process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  function (config: AxiosRequestConfig): AxiosRequestConfig {
    const accessToken = sessionStorage.getItem("access_token");
    const refreshToken = sessionStorage.getItem("Refresh_token");

    config.headers = {
      Authorization: !!accessToken ? `Bearer ${accessToken}` : "",
      refreshToken: !!refreshToken ? `Bearer ${refreshToken}` : "",
    };
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

/**도서 검색 API */
export const bookAPI = {
  searchBooks: (title: string) =>

    axios.get(
      `https://dapi.kakao.com/v3/search/book?target=title&query=${title}&size=20`,
      {
        headers: {
          Authorization: process.env.REACT_APP_KaKaoKEY!!
        }
      })

};

export default instance;
