import React from "react";
import "./Toolbar.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToogle from "../SideDrawer/DrawerToogle/DrawerToogle";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <DrawerToogle clicked = {props.drawerToogleClicked} />
        <Logo height= '80%' />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
