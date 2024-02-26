import { useState, useRef, useEffect } from "react";
//icons
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
//css
import "./style.css";

function Filter({
  name,
  children,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const close = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", close);

    return () => {
      document.removeEventListener("click", close);
    };
  }, []);
  return (
    <div className="filter-container" ref={ref}>
      <div className="filter-ele" onClick={toggle}>
        <AdjustmentsHorizontalIcon className="icon" />
        Display
        <ChevronDownIcon className="icon" />
      </div>

      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}
export default Filter;
