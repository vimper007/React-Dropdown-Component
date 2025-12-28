import { FiCheck } from "react-icons/fi";
import { useDropdown } from "../../../hooks/useDrodown";

const DropdownItem = ({ user }) => {
  const {
    assignedList,
    setAssignedList,
  } = useDropdown();
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
    <li
      key={user.id}
      className="flex items-center gap-2 p-4 hover:bg-[#2b2c37] rounded transition-all duration-200 "
      onClick={(e) => handleAssign(e, user)}
    >
      {assignedList.includes(user) && <FiCheck />}
      <img className="w-6 h-6 " src={user.imgUrl} alt={`${user.name} image`} />
      <span>{user.name}</span>
    </li>
  );
};

export default DropdownItem;
