
import { useState } from "react";

export const useToggle = () => {
  const [toggled, setToggled] = useState(false);

  const changeToggle = (toggleStatus) => {
    setToggled((prev) => {
      if (typeof toggleStatus === "boolean")return toggleStatus;
      return !prev;
    });
  };
  return [toggled, changeToggle]
};