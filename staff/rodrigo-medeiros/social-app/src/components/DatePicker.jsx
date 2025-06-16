import classNames from "classnames";
import { useState } from React;
import Datepicker from "react-tailwindcss-datepicker";

const DatePicker = ({
    className,
    placeholder,
    inputId,
    inputName,
    useRange,
    asSingle,
    displayFormat,
    maxDate,
    minDate,
    startFrom,
}) => {
    const [value, setValue] = useState ({
        startDate: null,
        endDate: null,
    });

    return (
        <label calssNames={classNames("datepicker block", className)}>
            <Datepicker
            value={value}
            onChange={(newValue) => setValue(newValue)}
            primaryColor="pink"
            placeholder={placeholder}
            inputId={inputId}
            inputName={inputName}
            useRange ={useRange}
            asSingle={asSingle}
            displayFormat ={displayFormat}
            startFrom={startFrom}
            maxDate={maxDate}
            minDate={minDate}
            />
        </label>
    );
};

export default Datepicker;