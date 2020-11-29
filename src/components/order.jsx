import React, { Component } from "react";

class Order extends Component {
  state = {
    value: this.props.order.value,
  };

  render() {
    return (
      <div>
        <span className="badge badge-primary">{this.state.value}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-success btn-sm m-2"
        >
          Increase Order
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Decrease Order
        </button>
        <button onClick={this.riseDelete} className="btn btn-danger btn-sm m-2">
          Delete
        </button>
      </div>
    );
  }

  // function call for referencing
  // can be repplaced in above button by inline arrow function
  riseDelete = () => {
    return this.props.onDelete(this.props.order.id);
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  handleDecrement = () => {
    const { value } = this.state;

    value === 0
      ? this.setState({ value: 0 })
      : this.setState({ value: value - 1 });
  };
}

export default Order;
