import axios, { AxiosResponse } from "axios";
import { Book } from "../types/types";

const BASE_URL = "https://dapi.kakao.com/v3/search/book";

interface BookData {
  documents: Book[];
}

interface BookAPI {
  searchBooks: (title: string) => Promise<AxiosResponse<BookData>>;
}

export const bookAPI: BookAPI = {
  searchBooks: (title) =>
    axios.get(BASE_URL, {
      headers: { Authorization: process.env.REACT_APP_KaKaoKEY as string },
      params: {
        target: title,
        query: title,
        size: 20,
      },
    }),
};
