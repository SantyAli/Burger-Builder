import React from "react";
import "./Modal.css";
import Auxx from "../../../hoc/Auxx";
import Backdrop from "../Backdrop/Backdrop";
import { Component } from "react/cjs/react.production.min";

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }
  componentDidUpdate() {
    console.log("[Modal] DidUpdate");
  }
  render() {
    return (
      <Auxx>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className="Modal"
          style={{
            transform: this.props.show ? "translateY(0)" : "translate(-100vh)",
            opacity: this.props.show ? "1" : "0",
          }}
        >
          {this.props.children}
        </div>
      </Auxx>
    );
  }
}

export default Modal;
