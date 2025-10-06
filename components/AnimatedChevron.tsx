import React from "react";

const AnimatedChevron: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={`text-white ${props.className || ""}`}
    >
      <g>
        <path
          d="M6 9l6 6 6-6"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 15l6 6 6-6"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <style jsx>{`
        svg {
          animation: bounce 1.8s infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.8;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }
      `}</style>
    </svg>
  );
};

export default AnimatedChevron;
