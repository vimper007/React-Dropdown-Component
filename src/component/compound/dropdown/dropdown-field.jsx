import { FiChevronDown } from "react-icons/fi";
import { useDropdown } from "../../../hooks/useDrodown";

const DropdownField = () => {
  const { setIsDropdownOpen, isDropdownOpen } = useDropdown();
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    console.log(isDropdownOpen)
  };
  return (
    <button
      className="px-4 w-full py-2 flex items-center justify-between rounded border border-[#828FA340] hover:border-primary cursor-pointer relative"
      onClick={toggleDropdown}
    >
      <span className="block">
        <FiChevronDown color="#635FC7" size={24} />
      </span>
    </button>
  );
};

export default DropdownField
