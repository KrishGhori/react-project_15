import React from "react";

const InfoCard = React.memo(({ count, theme }) => {
  console.log("InfoCard rendered");

  return (
    <div className="card info">
      <h3>Info</h3>
      <p>Current Count: {count}</p>
      <p>Current Theme: {theme}</p>
    </div>
  );
});

export default InfoCard;