export const handleIncrement = (currentValue, setValue, maxValue) => {
  if (currentValue < maxValue) {
    setValue(currentValue + 1);
  }
};

export const handleDecrement = (currentValue, setValue, minValue) => {
  if (currentValue > minValue) {
    setValue(currentValue - 1);
  }
};

export const handleCabinClassChange = (event, setCabinClass) => {
  setCabinClass(event.target.value);
};

// Toggles the passenger selection form
export const togglePassengersForm = (setIsPassengersOpen) => {
  setIsPassengersOpen((prevState) => !prevState);
};

// Closes the passenger selection form
export const handleDoneClick = (setIsPassengersOpen) => {
  setIsPassengersOpen(false);
};

// Returns a summary of the selected passengers and cabin class
export const getSelectionSummary = (adults, children, cabinClass) => {
  return `${adults} Adults, ${children} Children, ${cabinClass}`;
};

// Handles trip type selection (One Way / Round Trip)
export const handleTripTypeChange = (type, setTripType, setReturnDate) => {
  setTripType(type);
  if (type === "one-way") {
    setReturnDate(""); // Clears the return date when selecting "One Way"
  }
};

// Handles departure date selection
export const handleDepartureChange = (event, setDepartureDate, setReturnDate, returnDate) => {
  const selectedDate = event.target.value;
  setDepartureDate(selectedDate);
  if (returnDate && returnDate < selectedDate) {
    setReturnDate(""); // Clears the return date if it is earlier than the departure date
  }
};

// Handles return date selection
export const handleReturnChange = (event, setReturnDate, departureDate) => {
  const selectedDate = event.target.value;
  if (selectedDate >= departureDate) {
    setReturnDate(selectedDate);
  }
};
