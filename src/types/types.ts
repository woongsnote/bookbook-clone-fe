export interface Review {
  id?: number;
  title: string;
  readStart: string;
  readEnd: string;
  star: number;
  comment: string;
  page: number;
  imageUrl: string;
}

export interface Reviews {
  reviews: Review[] | null;
}

export interface Book {
  isbn: string;
  authors: string[];
  title: string;
  contents: string;
  thumbnail: string;
}
