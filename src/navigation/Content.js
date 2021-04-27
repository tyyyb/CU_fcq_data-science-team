import { Link, Route, BrowserRouter as Router } from "react-router-dom";

import Main from "./Main";
import React from "react";

function Header() {
  return (
    <Router>
      <div className="App">
        <nav className="navBar">
          <ul>
            <li>
              <Link to="/Home"> Home</Link>
            </li>
            <li>
              <Link to="/Dashboard1"> Dashboard 1 </Link>
            </li>
            <li>
              <Link to="/Dashboard2"> Dashboard 2 </Link>
            </li>
          </ul>
        </nav>

        <Main />
      </div>
    </Router>
  );
}

export default Header;