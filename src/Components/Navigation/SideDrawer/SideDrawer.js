import React from "react";
import Auxx from "../../../hoc/Auxx";
import Logo from "../../Logo/Logo";
import Backdrop from "../../UI/Backdrop/Backdrop";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const SideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Closed"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <Auxx>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        {/* <div className="Logo"> */}
        <Logo height="11%" marginBottom="32px" />
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxx>
  );
};

export default SideDrawer;
