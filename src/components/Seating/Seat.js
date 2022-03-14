import React from "react";
import "../../styles/seat.css";

export default function Seat({ variant, seatNo, tooltip, customClick }) {
  const disabled = variant.includes("unavailable");
  return (
    <div
      className={`seat ${variant}`}
      title={tooltip && !disabled ? tooltip : ""}
      onClick={customClick}
    >
      {seatNo}
    </div>
  );
}
