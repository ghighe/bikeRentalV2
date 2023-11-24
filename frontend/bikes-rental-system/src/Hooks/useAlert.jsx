import { useContext } from "react";
import { AlertContext } from "../providers/AlertProvider";

export const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert should be used within an AlertProvider");
  }

  //console.log(context);

  return context;
};
