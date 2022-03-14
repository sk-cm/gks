import React from "react";

function Svg({ icon, width, height, customClass, clickHandler, tooltip }) {
  const arrowLeft = (
    <svg
      className={customClass ? customClass : ""}
      data-tip={tooltip}
      onClick={clickHandler}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 19L8.5 12L15.5 5"
        // stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const arrowRight = (
    <svg
      className={customClass ? customClass : ""}
      data-tip={tooltip}
      onClick={clickHandler}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.5 5L15.5 12L8.5 19"
        // stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const arrowDownBold = (
    <svg
      className={customClass ? customClass : ""}
      data-tip={tooltip}
      onClick={clickHandler}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z"
        // fill="white"
      />
    </svg>
  );

  const arrowRightBold = (
    <svg
      className={customClass ? customClass : ""}
      data-tip={tooltip}
      onClick={clickHandler}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.6308 13.131C16.5743 13.189 16.3609 13.437 16.1622 13.641C14.9971 14.924 11.9576 17.024 10.3668 17.665C10.1252 17.768 9.51437 17.986 9.18802 18C8.8753 18 8.5772 17.928 8.29274 17.782C7.93814 17.578 7.65368 17.257 7.49781 16.878C7.39747 16.615 7.2416 15.828 7.2416 15.814C7.08573 14.953 7 13.554 7 12.008C7 10.535 7.08573 9.193 7.21335 8.319C7.22796 8.305 7.38383 7.327 7.55431 6.992C7.86702 6.38 8.47784 6 9.13151 6H9.18802C9.61374 6.015 10.509 6.395 10.509 6.409C12.0141 7.051 14.9834 9.048 16.1768 10.375C16.1768 10.375 16.5129 10.716 16.659 10.929C16.887 11.235 17 11.614 17 11.993C17 12.416 16.8724 12.81 16.6308 13.131Z"
        // fill="white"
      />
    </svg>
  );

  const search = (
    <svg
      className={customClass ? customClass : ""}
      data-tip={tooltip}
      onClick={clickHandler}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Iconly/Light/Search">
        <g id="Search">
          <circle
            id="Ellipse_739"
            cx="11.7666"
            cy="11.7666"
            r="8.98856"
            // stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Line_181"
            d="M18.0183 18.4851L21.5423 22"
            // stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
    </svg>
  );

  switch (icon) {
    case "arrowLeft":
      return arrowLeft;
    case "arrowRight":
      return arrowRight;
    case "arrowDownBold":
      return arrowDownBold;
    case "arrowRightBold":
      return arrowRightBold;
    case "search":
      return search;
    default:
      return null;
  }
}

Svg.defaultProps = {
  width: "24",
  height: "24",
  stroke: "#fff",
};

export default Svg;
