import { useEffect } from "react";

const useClickOutside = (ref, callback) => {
  const handleMouseDown = (e) => {
    if (ref?.current && ref?.current.contains(e?.target)) return;
    callback?.();
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);
};

export default useClickOutside;
