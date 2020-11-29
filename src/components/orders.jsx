import React, { Component } from "react";
import Order from "./order";

class Orders extends Component {
  state = {
    orders: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h1>Order your order here!</h1>
        <hr />
        {this.state.orders.map((order) => (
          <Order key={order.id} order={order} onDelete={this.handleDelete} />
        ))}
      </React.Fragment>
    );
  }

  handleDelete = (order_delete_id) => {
    const new_orders = this.state.orders.filter(
      (order) => order.id !== order_delete_id
    );
    this.setState({ orders: new_orders });
  };
}

export default Orders;
