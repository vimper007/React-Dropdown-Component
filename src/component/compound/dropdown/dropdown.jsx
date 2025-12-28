import { createContext, ReactNode, useRef, useState } from "react";
import { usersArray } from "../../../App";
import DropdownField from "./dropdown-field";
import DrodownList from "./dropdown-list";
import DropdownItem from "./dropdown-item";
import DrodownAssignedList from "./dropdown-assigned-list";
import useClickOutside from "../../../hooks/useClickOutside";
import DropdownClose from "./dropdown-close";

export const DropdownContext = createContext(null);

const DropdownCompond = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [assignedList, setAssignedList] = useState([]);
  const dropdownRef2 = useRef(null);
  useClickOutside(dropdownRef2, () => setIsDropdownOpen(false));
  return (
    <DropdownContext.Provider
      value={{
        usersArray,
        isDropdownOpen,
        setIsDropdownOpen,
        assignedList,
        setAssignedList,
      }}
    >
      <div ref={dropdownRef2}>{children}</div>
    </DropdownContext.Provider>
  );
};

DropdownCompond.Field = DropdownField;
DropdownCompond.List = DrodownList;
DropdownCompond.Item = DropdownItem;
DropdownCompond.AssignedList = DrodownAssignedList;
DropdownCompond.Close = DropdownClose;

export default DropdownCompond;
