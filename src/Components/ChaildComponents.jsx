import React from 'react'


// if u r sending a function , then react.memo won't be able to save you to re-rendering
const ChaildComponents = React.memo(
    (props) => {
    console.log("Chaild components go re-render")
  return (
    <div>
      <button onClick={props.handleclick}>
        {props.buttonName}
      </button>
    </div>
  )
}
)

export default ChaildComponents
