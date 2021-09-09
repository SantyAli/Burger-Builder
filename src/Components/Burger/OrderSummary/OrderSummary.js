import React from "react";
import { Component } from "react/cjs/react.production.min";
import Auxx from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //Controled by Modal Component either to rerender or not as it is wrapped by Modal Componenet
  componentDidUpdate() {
    console.log("[OrderSummary] DidUpdate");
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Auxx>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul> {ingredientSummary} </ul>
        <p>Continue to checkout?</p>
        <p>
          <strong> Totall Price: {this.props.price.toFixed(2)} </strong>
        </p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          CONTINUE
        </Button>
      </Auxx>
    );
  }
}

export default OrderSummary;
