import { useContext } from "react";
import { AlertContext } from "../providers/AlertProvider";

export const useAlert = () => {
  const alertContext = useContext(AlertContext);

  if (!alertContext) {
    throw new Error("useAlert should be used within an AlertProvider");
  }

  //console.log(context);

  return alertContext;
};
