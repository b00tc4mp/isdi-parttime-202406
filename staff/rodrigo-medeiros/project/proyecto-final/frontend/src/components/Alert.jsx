import React from "react";
import useCustomContext from "../hooks/useCustomContext";

function Alert() {
  const { alert } = useCustomContext();
  if (!alert || !alert.message) return null;

  const styleMap = {
    success: "bg-blue-200 text-blue-900",
    error: "bg-yellow-500 text-white",
    info: "bg-blue-200 text-blue-900",
  };

  const alertStyle = styleMap[alert.type] || styleMap.info;

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[9999] w-1/4">
      <div className={`p-4 text-center font-semibold text-lg rounded-lg shadow-md ${alertStyle}`}>
        {alert.message}
      </div>
    </div>
  );
}

export default Alert;
