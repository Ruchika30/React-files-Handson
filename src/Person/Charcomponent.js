import React, { Component } from "react";

const Charcomponent = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    margin: "16px",
    border: "1px solid black",
    textAlign: "center"
  };

  return (
    <div style={style} onClick={props.clicked}>
      {props.char}
    </div>
  );
};

export default Charcomponent;
