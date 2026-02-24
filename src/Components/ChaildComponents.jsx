import React from "react";

const ChildComponents = React.memo((props) => {
  console.log("❗ Child Re-rendered");

  return (
    <button className="btn child" onClick={props.handleClick}>
      {props.buttonName}
    </button>
  );
});

export default ChildComponents;