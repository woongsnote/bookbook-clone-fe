type InfoBoxProps = {
  imageUrl: string;
  pages: number;
  readStart: string;
  readEnd: string;
  star: number;
  comment: string;
};

const InfoBox = ({
  imageUrl,
  pages,
  readStart,
  readEnd,
  star,
  comment,
}: InfoBoxProps) => {
  return (
    <div
      className="flex flex-col w-full items-center sm:flex-row"
      id="InfoContainer">
      <div
        className="w-2/5  h-1/2 flex items-center justify-center"
        id="BookImage">
        <img
          src={imageUrl}
          alt="BookCover"
          className="max-w-xs h-auto self-center"
        />
      </div>

      <div className="w-3/5" id="BookInfo">
        <div className="flex flex-col gap-4 my-4 rounded" id="ReadingPeriod">
          <strong>독서 기간</strong>
          <div className="flex flex-row gap-10">
            <p>시작일: {readStart}</p>
            <p>종료일: {readEnd}</p>
          </div>
        </div>
        <hr />
        <div className="flex flex-row gap-10 w-full my-2">
          <p>
            <strong>⭐별점</strong>: ⭐{star}{" "}
          </p>
          <p>
            <strong>총 페이지</strong>: {pages} 페이지
          </p>
        </div>
        <hr />

        <div className="my-4" id="CommentBox">
          <strong>책 후기</strong>
          <p className="mt-2">{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
