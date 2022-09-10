import { useState } from 'react';
import styled from 'styled-components';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';

const DatePick = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <DatePickWrap>
      <DatePicker
        locale={ko}
        dateFormat='yyyy/MM/dd'
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={update => {
          setDateRange(update);
        }}
      />
    </DatePickWrap>
  );
};

const DatePickWrap = styled.div`
  width: 100%;

  & input {
    min-width: 45%;
    text-align: center;
    border: 1px solid red;
    border-radius: 7px;
  }
`;

export default DatePick;
