import classNames from "classnames";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({ className, placeholder }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <div className={classNames("datepicker", className)}>
      <Datepicker
        useRange={false}
        asSingle={true}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default DatePicker;
