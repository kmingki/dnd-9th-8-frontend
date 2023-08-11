import React from "react";

const UnCheckedBox = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.52637"
        y="1.26758"
        width="16.5"
        height="16.5"
        rx="3.75"
        fill="white"
        stroke="#D1D5DC"
        strokeWidth="1.5"
      />
    </svg>
  );
};

const CheckedBox = () => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.776367"
        y="0.736328"
        width="18"
        height="18"
        rx="4.5"
        fill="#00B488"
      />
      <path
        d="M5.27637 9.12206L8.67881 13.2656L14.2764 6.51562"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export { UnCheckedBox, CheckedBox };
