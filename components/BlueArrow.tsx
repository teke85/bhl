import React from "react";

const BlueArrow = ({
  width = 200,
  height = 60,
  color = "#007BFF",
  className = "",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60" // expanded coordinate system
      fill="none"
      strokeWidth={5}
      stroke={color}
      className={className}
      width={width}
      height={height}
    >
      {/* Horizontal arrow line */}
      <line
        x1="0"
        y1="30"
        x2="180"
        y2="30"
        stroke={color}
        strokeLinecap="round"
      />
      {/* Arrowhead */}
      <polyline
        points="160,10 180,30 160,50"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BlueArrow;
