import { Dispatch, SetStateAction } from "react";

type ReadingPeriodProps = {
  readStart: Date | string | undefined;
  readEnd: Date | string | undefined;
  setReadStart: Dispatch<SetStateAction<string | Date>>;
  setReadEnd: Dispatch<SetStateAction<string | Date>>;
};

const ReadingPeriod = ({
  readStart,
  readEnd,
  setReadStart,
  setReadEnd,
}: ReadingPeriodProps) => {
  return (
    <div>
      <h2>독서 기간</h2>
      <input
        type="date"
        id="readStart"
        min="2000-01-01"
        max="2999-12-31"
        value={readStart?.toString()}
        onChange={(e) => {
          setReadStart(e.target.value);
        }}
      />
      <input
        type="date"
        id="readEnd"
        min="2000-01-01"
        max="2999-12-31"
        value={readEnd?.toString()}
        onChange={(e) => {
          setReadEnd(e.target.value);
        }}
      />
    </div>
  );
};

export default ReadingPeriod;
