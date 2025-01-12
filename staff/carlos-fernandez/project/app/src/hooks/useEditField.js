import { useState } from "react";

function useEditField(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [originalValue, setOriginalValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setOriginalValue(value);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setValue(originalValue);
    setIsEditing(false);
  };

  const saveValue = (newValue) => {
    setValue(newValue);
    setIsEditing(false);
  };

  return {
    value,
    setValue,
    isEditing,
    startEditing,
    cancelEditing,
    saveValue,
  };
}

export default useEditField;
