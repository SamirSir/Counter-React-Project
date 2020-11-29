import React, { Component } from "react";

class Counter extends Component {
  // for single source of truth: remove the local state i.e. state from the child component

  // state = {
  //   value: this.props.counter.value,

  // tags: ["Apple", "Banana", "Cherry", "Black Berry"],
  // imageUrl: "https://picsum.photos/200",
  // };

  // the purpose of bind here is to bypass the window object to current object

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  render() {
    // console.log(this.props);
    return (
      <div>
        <span className={this.badgeColor()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-1"
        >
          -
        </button>

        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Delete
        </button>

        {/* {this.state.tags.length == 0 && <p>Your list is empty</p>} */}

        {/* <ol className="display-inline">
          {this.state.tags.map((tag) => (
            <li key={tag}>
              <span>{tag}</span>
              <button className="btn btn-sm btn-secondary m-1">+</button>
              <button className="btn btn-sm btn-secondary m-1">-</button>
            </li>
          ))}
        </ol> */}
        {/* <img src={this.state.imageUrl} alt="" /> */}
      </div>
    );
  }

  // let the state update by patent component
  // handleIncrement = () => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  badgeColor() {
    let badgeColors = "badge badge-sm m-2 badge-";
    const val = this.props.counter.value;
    badgeColors +=
      val === 0
        ? "danger"
        : val <= 2
        ? "warning"
        : val <= 7
        ? "success"
        : val <= 15
        ? "primary"
        : "secondary";
    return badgeColors;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
