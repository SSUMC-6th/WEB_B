import React from "react";

export default function Detail({ title, overview }) {
  return (
    <div className="detail">
      <div>{title}</div>
      <div className="detailOverview">{overview}</div>
    </div>
  );
}
