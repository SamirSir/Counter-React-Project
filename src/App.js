import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 1 },
    ],
  };

  handleIncrement = (index_counter) => {
    const index = this.state.counters.indexOf(index_counter);
    const counters = [...this.state.counters];
    counters[index].value += 1;
    this.setState({ counters });
  };

  handleDecrement = (index_counter) => {
    const index = this.state.counters.indexOf(index_counter);
    const counters = [...this.state.counters];
    if (counters[index].value > 0) {
      counters[index].value -= 1;
    }
    this.setState({ counters });
  };

  handleDelete = (index) => {
    const new_counters = this.state.counters.filter((c) => c.id !== index);
    this.setState({ counters: new_counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters: counters });
  };

  totalCounters = () => {
    return this.state.counters.filter((c) => c.value > 0).length;
  };

  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.totalCounters()} />
        <main className="container-fluid">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
