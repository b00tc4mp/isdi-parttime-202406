import classNames from "classnames";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({
  className,
  placeholder,
  inputId,
  inputName,
  popoverDirection,
  useRange,
  asSingle,

  displayFormat,
  startFrom,
  minDate,
  maxDate,
}) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <label className={classNames("datepicker block", className)}>
      <Datepicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        primaryColor={"fuchsia"}
        placeholder={placeholder}
        inputId={inputId}
        inputName={inputName}
        useRange={useRange}
        asSingle={asSingle}
        popoverDirection={popoverDirection}
        displayFormat={displayFormat}
        startFrom={startFrom}
        maxDate={maxDate}
        minDate={minDate}
      />
    </label>
  );
};

export default DatePicker;
