import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import ParticlesBg from "particles-bg";
import NavBar from "./Components/Navigation/NavBar";

class App extends React.Component {
  render() {
    return (
      <>
        <ParticlesBg type="thick" bg={true} />
        <NavBar />
        <div className="App">
          <Outlet />
        </div>
      </>
    );
  }
}

export default App;
