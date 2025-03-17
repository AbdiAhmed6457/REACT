import { useEffect } from "react";

const ClickOutside = ({ children, onClick, className }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(`.${className}`)) {
        onClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClick, className]);

  return <div className={className}>{children}</div>;
};

export default ClickOutside;