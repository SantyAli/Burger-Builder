import React from "react";
import "./DrawerToogle.css";
const DrawerToogle = (props) => {
  return (
    <div className="DrawerToggle" onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default DrawerToogle;
