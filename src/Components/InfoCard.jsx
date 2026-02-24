import React from "react";

const InfoCard = React.memo(({ count, theme }) => {
  return (
    <div className="card info">
      <p>Count Value: {count}</p>
      <p>Active Theme: {theme}</p>
    </div>
  );
});

export default InfoCard;