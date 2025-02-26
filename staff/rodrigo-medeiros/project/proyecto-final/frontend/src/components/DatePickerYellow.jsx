import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
//import { IoCalendarOutline } from 'react-icons/io5';

function DatePickerYellow () {
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="flex flex-col">
      <label htmlFor="departure" className="text-sm font-medium text-gray">Departure</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        className="bg-yellow-500 text-black border-none p-2 rounded-lg mt-1"
        calendarClassName="bg-yellow-500 text-black"
        dateFormat="yyyy-MM-dd"
        placeholderText="Select a date"
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div className="flex justify-between items-center px-2 py-1">
            <button onClick={decreaseMonth} className="text-black">Previous</button>
            <span className="text-black">{monthDate.toLocaleString('default', { month: 'long' })} {monthDate.getFullYear()}</span>
            <button onClick={increaseMonth} className="text-black">Next</button>
          </div>
        )}
        dayClassName={(date) => {
          return date.getDay() === 0 || date.getDay() === 6
            ? 'text-black bg-yellow-400' // Style weekends
            : 'text-black bg-yellow-300'; // Style weekdays
        }}
      />
    </div>
  );
};

export default DatePickerYellow;