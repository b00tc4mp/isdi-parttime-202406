import classNames from "classnames";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import ES from "../locales/es.json";

const DatePicker = ({ className, placeholder }) => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  return (
    <div
      className={classNames("datepicker relative", className)}
      style={{ zIndex: 1 }}
    >
      <Datepicker
        primaryColor={"fuchsia"}
        useRange={false}
        asSingle={true}
        value={value}
        onChange={(newValue) => setValue(newValue)}
        placeholder={ES.signupForm.inputDateOfBirth}
        popoverDirection="down"
        displayFormat="DD/MM/YYYY"
      />
    </div>
  );
};

export default DatePicker;
