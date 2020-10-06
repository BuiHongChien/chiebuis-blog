import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";

import "./Plans.css";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (e) => {
      if (ref.current.contains(e.target)) return;
      setOpen(false);
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if (option === selected) return null;

    return (
      <div
        key={option.toLowerCase()}
        className={`dropdown-${option.toLowerCase()}`}
        onClick={() => onSelectedChange(option)}
      >
        {option}
      </div>
    );
  });

  return (
    <div>
      <div ref={ref} className="dropdown-button" onClick={() => setOpen(!open)}>
        <div className={`dropdown-${selected.toLowerCase()}`}>{selected}</div>
        <div >{open ? renderedOptions : null}</div>
      </div>
    </div>
  );
};

export default Dropdown;
