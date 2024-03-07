import React from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar, FaStar } from "react-icons/fa6";

const Star = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let numbers = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar />
        ) : stars >= numbers ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });
  return (
    <div>
      {ratingStar}
      <span> ({reviews} customer reviews)</span>
    </div>
  );
};

export default Star;
