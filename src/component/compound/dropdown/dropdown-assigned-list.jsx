import React from "react";
import AssignedList from "../../assignedList";
import { useDropdown } from "../../../hooks/useDrodown";

const DrodownAssignedList = () => {
  const {
    usersArray,
    isDropdownOpen,
    setIsDropdownOpen,
    assignedList,
    setAssignedList,
  } = useDropdown();
  return (
    <div>
      {assignedList.length === 0 ? (
        <p className="mt-4 p-2 shadow-sm bg-[#828fa318] rounded">
          No users assigned to the task yet.
        </p>
      ) : (
        <AssignedList
          assignedList={assignedList}
          setAssignedList={setAssignedList}
        />
      )}
    </div>
  );
};

export default DrodownAssignedList;
