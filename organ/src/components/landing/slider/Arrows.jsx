import React from "react";

function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="prev" onClick={prevSlide}>
        <img src="./real_left_arrow.png" alt="" />
      </span>
      <span className="next" onClick={nextSlide}>
        <img src="./real_right_arrow.png" alt="" />
      </span>
    </div>
  );
}

export default Arrows;