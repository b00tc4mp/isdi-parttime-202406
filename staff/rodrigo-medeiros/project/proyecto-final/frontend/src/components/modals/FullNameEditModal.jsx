import React from "react";

const FullNameEditModal = ({
  show,
  newFullName,
  currentPassword,
  onNewFullNameChange,
  onCurrentPasswordChange,
  onConfirm,
  onCancel,
}) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-blue-200 p-6 rounded-lg shadow-lg">
        <p className="text-black mb-4">Insert your new Full Name</p>
        <input
          type="text"
          className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
          value={newFullName}
          onChange={(e) => onNewFullNameChange(e.target.value)}
        />
        <input
          type="password"
          className="bg-gray-200 text-black p-2 rounded-lg w-full mb-4"
          placeholder="Password"
          value={currentPassword}
          onChange={(e) => onCurrentPasswordChange(e.target.value)}
        />
        <div className="flex justify-between">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={onConfirm}
          >
            Confirm
          </button>
          <button
            type="button"
            className="bg-blue-900 px-4 py-2 rounded-lg"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default FullNameEditModal;
