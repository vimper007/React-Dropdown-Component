import { FiCheck, FiChevronDown } from "react-icons/fi";
import AssignedList from "./assignedList";
import useClickOutside from "../hooks/useClickOutside";
import { useRef } from "react";
import { FaXmark } from "react-icons/fa6";

const DropDown = ({
  usersArray,
  isDropdownOpen,
  setIsDropdownOpen,
  setAssignedList,
  assignedList,
}) => {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, () => setIsDropdownOpen(false));
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleAssign = (e, user) => {
    e.stopPropagation();
    if (assignedList.includes(user)) {
      setAssignedList((prevList) =>
        prevList.filter((currentUser) => currentUser.id !== user.id)
      );
    } else {
      setAssignedList((prevList) => [...prevList, user]);
    }
  };

  return (
    <div ref={dropdownRef}>
      <label htmlFor="">Assign user(s) to as task:</label>
      <button
        className="px-4 w-full py-2 flex items-center justify-between rounded border border-[#828FA340] hover:border-primary cursor-pointer relative"
        onClick={toggleDropdown}
      >
        <span className="block">
          <FiChevronDown color="#635FC7" size={24} />
        </span>
        {isDropdownOpen && (
          <div className="absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max">
            <div
              className="absolute top-0 right-0 flex items-center justify-center -translate-y-full gap-2 bg-[#C0392B] px-2 py-1 rounded-t"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(false);
              }}
            >
              <span>Close</span>
              <span>
                <FaXmark size={20} />
              </span>
            </div>
            <ul className="flex flex-col p-2">
              {usersArray.map((user) => (
                <li
                  key={user.id}
                  className="flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 "
                  onClick={(e) => handleAssign(e, user)}
                >
                  {assignedList.includes(user) && <FiCheck />}
                  <img
                    className="w-6 h-6 "
                    src={user.imgUrl}
                    alt={`${user.name} image`}
                  />
                  <span>{user.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </button>
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

export default DropDown;

