// frontend/src/hooks/useCustomContext.js
import { useContext } from "react";
import { AlertContext } from "../context/AlertContext";

export default function useCustomContext() {
  return useContext(AlertContext);
}
