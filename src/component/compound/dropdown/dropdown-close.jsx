import React from "react";
import { FaXmark } from "react-icons/fa6";
import { useDropdown } from "../../../hooks/useDrodown";

const DropdownClose = () => {
  const { setIsDropdownOpen, isDropdownOpen } = useDropdown();
  return (
    <>
      {isDropdownOpen && (
        <div
          className="absolute top-10 right-0 flex items-center justify-center -translate-y-full gap-2 bg-[#C0392B] px-2 py-1 rounded-t z-50"
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
      )}
    </>
  );
};

export default DropdownClose;
