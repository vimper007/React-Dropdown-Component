import { FaXmark } from "react-icons/fa6";
import { useDropdown } from "../../../hooks/useDrodown";
import DropdownCompond from "./dropdown";

const DrodownList = ({ children }) => {
  const {
    usersArray,
    isDropdownOpen,
    setIsDropdownOpen,
    assignedList,
    setAssignedList,
  } = useDropdown();

  return (
    <>
      {isDropdownOpen && (
        <div className="absolute bottom-full translate-x-9  left-full translate-y-full rounded bg-[#20212c] w-max">
          <div
            className="absolute top-0 left-11 flex items-center justify-center -translate-y-full gap-2 bg-[#C0392B] px-2 py-1 rounded-t"
            onClick={(e) => {
              e.stopPropagation();
              setIsDropdownOpen(false);
              console.log(isDropdownOpen);
            }}
          >
            <span>Close</span>
            <span>
              <FaXmark size={20} />
            </span>
          </div>
          <ul className="flex flex-col p-2">
            {usersArray.map((user) => (
              <DropdownCompond.Item user={user} key={user.id}/>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default DrodownList;
