import DatePick from './DatePick';

const ReadingPeriod = ({ readStart, readEnd }:any) => {
  return (
    <div>
      <span className='text-black text-xl font-bold'>독서 기간</span>
      <DatePick />
    </div>
  );
};

export default ReadingPeriod;
