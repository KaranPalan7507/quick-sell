import { useState, useRef, useEffect } from "react";
//icons
import { ChevronDownIcon } from "@heroicons/react/24/solid";
//css
import "./style.css";

function Select({ name, options, onChange, value }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value === value) || null
  );

  const ref = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const close = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange?.(option);
  };

  useEffect(() => {
    document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  }, []);

  return (
    <div className="select-container" ref={ref}>
      <div className="select-ele" onClick={toggle}>
        {selectedOption?.label || "Select"}
        <ChevronDownIcon className="icon" />
      </div>

      {isOpen && (
        <ul className="select-menu">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleOptionClick(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Select;
