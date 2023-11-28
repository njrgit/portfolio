import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="App">
          <Outlet />
        </div>
      </>
    );
  }
}

export default App;
