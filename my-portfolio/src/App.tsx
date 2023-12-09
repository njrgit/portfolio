import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import ParticlesBg from "particles-bg";
import NavBar from "./Components/Navigation/NavBar";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="app">
          <ParticlesBg type="thick" bg={true} />
          <NavBar />
          <Outlet />
        </div>
      </>
    );
  }
}

export default App;
