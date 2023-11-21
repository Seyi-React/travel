import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home/>
    </React.Fragment>
  );
};

export default App;
