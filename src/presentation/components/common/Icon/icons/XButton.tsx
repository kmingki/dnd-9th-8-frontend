import React from "react";

const XButton = () => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_659_11597)">
        <ellipse cx="37.1077" cy="35.1903" rx="27" ry="26.9991" fill="#232527" />
        <path
          d="M63.6077 35.1903C63.6077 49.8253 51.7432 61.6893 37.1077 61.6893C22.4721 61.6893 10.6077 49.8253 10.6077 35.1903C10.6077 20.5552 22.4721 8.69116 37.1077 8.69116C51.7432 8.69116 63.6077 20.5552 63.6077 35.1903Z"
          stroke="#383838"
        />
      </g>
      <path
        d="M32.4485 28.5712L37.1071 33.2297L41.7656 28.5711L43.3185 30.124L38.6599 34.7826L43.3185 39.4412L41.7656 40.9941L37.1063 36.3347L32.4485 40.9941L30.8956 39.4412L35.5534 34.7818L30.8956 30.124L32.4485 28.5712Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_d_659_11597"
          x="0.207719"
          y="0.219754"
          width="73.7999"
          height="73.7981"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1.92854" />
          <feGaussianBlur stdDeviation="4.94997" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_659_11597"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_659_11597"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default XButton;
