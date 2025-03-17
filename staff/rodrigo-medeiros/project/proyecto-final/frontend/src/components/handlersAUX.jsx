//Flight related handlers
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
  
  
  
  
  
  
  // Profile related handlers
  export const handleUpdate = async (e, userData, setError, navigate) => {
    e.preventDefault();
    const token = sessionStorage.getItem("authToken");
  
    if (!token) {
      navigate("/signin");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
  
      alert("Profile updated successfully");
    } catch (err) {
      setError(err.message);
    }
  };
  
  export const handleDeleteClick = (setShowDeleteConfirm) => {
    setShowDeleteConfirm(true);
  };
  
  export const handleDeleteCancel = (setShowDeleteConfirm) => {
    setShowDeleteConfirm(false);
  };
  
  export const handleDeleteConfirm = (setShowDeleteConfirm, setShowPasswordConfirm) => {
    setShowDeleteConfirm(false);
    setShowPasswordConfirm(true);
  };
  
  export const handleDeleteAccount = async (currentPassword, setError, navigate) => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/user/delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ password: currentPassword }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete account");
      }
  
      sessionStorage.removeItem("authToken");
      alert("Account deleted successfully");
      navigate("/signup");
    } catch (err) {
      setError(err.message);
    }
  };
  
  export const handleEmailEdit = (setShowEmailConfirm) => {
    setShowEmailConfirm(true);
  };
  
  export const handleFullNameEdit = (setShowFullNameConfirm) => {
    setShowFullNameConfirm(true);
  };
  
  export const handleDateOfBirthEdit = (setShowDateOfBirthConfirm) => {
    setShowDateOfBirthConfirm(true);
  };
  
  export const handleEmailUpdate = async (newEmail, currentPassword, setError, setShowEmailConfirm, navigate) => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/user/updateEmail", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newEmail, password: currentPassword }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update email");
      }
  
      alert("Email updated successfully");
      setShowEmailConfirm(false);
    } catch (err) {
      setError(err.message);
    }
  };
  
  export const handleFullNameUpdate = async (newFullName, currentPassword, setError, setShowFullNameConfirm, navigate) => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/user/updateFullName", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newFullName, password: currentPassword }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update full name");
      }
  
      alert("Full name updated successfully");
      setShowFullNameConfirm(false);
    } catch (err) {
      setError(err.message);
    }
  };
  
  export const handleDateOfBirthUpdate = async (newDateOfBirth, currentPassword, setError, setShowDateOfBirthConfirm, navigate) => {
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/user/updateDateOfBirth", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ newDateOfBirth, password: currentPassword }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update date of birth");
      }
  
      alert("Date of birth updated successfully");
      setShowDateOfBirthConfirm(false);
    } catch (err) {
      setError(err.message);
    }
  };
  
  export const handlePasswordUpdate = async (currentPassword, newPassword, repeatNewPassword, setError, setShowPasswordConfirm, navigate) => {
    if (newPassword !== repeatNewPassword) {
      setError("Passwords do not match");
      return;
    }
  
    const token = sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/signin");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:5000/api/user/updatePassword", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update password");
      }
  
      alert("Password updated successfully");
      setShowPasswordConfirm(false);
    } catch (err) {
      setError(err.message);
    }
  };
  
  export const handlePasswordEdit = (setShowPasswordConfirm) => {
    setShowPasswordConfirm(true);
  };
  