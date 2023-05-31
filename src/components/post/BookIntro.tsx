import { Dispatch, SetStateAction } from "react";

type BookIntroProps = {
  comment: string;
  setComment: Dispatch<SetStateAction<string>>;
};

const BookIntro = ({ comment, setComment }: BookIntroProps) => {
  return (
    <div className="flex flex-col mt-[10%]">
      <span className="text-black text-xl font-bold">📖 책 소개 📖</span>
      <textarea
        className="w-[80%]"
        name="book_intro"
        onChange={(e) => {
          setComment(e.target.value);
        }}
        placeholder={comment}
      />
    </div>
  );
};

export default BookIntro;
