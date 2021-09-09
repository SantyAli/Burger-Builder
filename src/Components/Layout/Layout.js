import React, { Component } from "react";
import Auxx from "../../hoc/Auxx";
import "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class layout extends Component {
  state = {
    showSideDrawer: false,
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToogleHandler = () => {
    // this.setState({ showSideDrawer: !this.state.showSideDrawer });
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };

  render() {
    return (
      <Auxx>
        <Toolbar drawerToogleClicked={this.sideDrawerToogleHandler} />
        <SideDrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />
        <main className="Content">{this.props.children}</main>
      </Auxx>
    );
  }
}

export default layout;
