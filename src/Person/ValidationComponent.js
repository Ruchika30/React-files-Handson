import React, { Component } from "react";

// if no state is tobe handles then use functional component
const ValidationComponent = props => {
  const lentxt = props.userinp.length;
  let validationmessge = "Text long ";

  if (lentxt < 5) {
    validationmessge = " text is short";
  }

  return (
    <div>
      <p>{validationmessge}</p>
    </div>
  );
};

export default ValidationComponent;
