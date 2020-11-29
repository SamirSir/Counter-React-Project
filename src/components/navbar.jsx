import React, { Component } from "react";

// stateless Functional Component
// an alternative to class in a module
// react passes props by default to sfc
// SFC doesnt have (the state, render function and access to this function)

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a href="#" className="navbar-brand">
//           Total Active Counters &nbsp;
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="#" className="navbar-brand">
        Total Active Counters &nbsp;
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
