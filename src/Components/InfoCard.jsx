import React from "react";

const InfoCard = React.memo(({ count, theme }) => {
  return (
    <div className="card info">
      <p><strong>Count Value:</strong> {count}</p>
      <p><strong>Active Theme:</strong> {theme}</p>
    </div>
  );
});

export default InfoCard;