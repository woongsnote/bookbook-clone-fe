import tw from 'tailwind-styled-components';
import DatePick from './DatePick';

const ReadingPeriod = () => {
  return (
    <BookReadingBox>
      <DateTitle>독서 기간</DateTitle>
      <DatePick />
    </BookReadingBox>
  );
};
const BookReadingBox = tw.div``;

const DateTitle = tw.div`
  text-white
  text-xl
`;

export default ReadingPeriod;
