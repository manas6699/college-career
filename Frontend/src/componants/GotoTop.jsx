import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";
const GotoTop = () => {
  const goTobtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div>
      <div className="top-button" onClick={goTobtn}>
        <FiArrowUpCircle />
      </div>
    </div>
  );
};

export default GotoTop;
