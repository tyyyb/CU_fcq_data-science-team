import { Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard1 from "../components/Dashboard1";
import Dashboard2 from "../components/Dashboard2";
import Home from "../components/Home";
import React from "react";

function Main() {
  return (
    <section>
      <Route path="/Dashboard1/" component={Dashboard1} />
      <Route path="/Dashboard2/" component={Dashboard2} />
      <Route path="/Home/" component={Home} />

      {/* testing sending string prop and destructure in component */}
    </section>
  );
}

export default Main;