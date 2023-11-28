import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import ParticlesBg from "particles-bg";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg type="thick" bg={true} />
        <Header/>
      </div>
    );
  }
}

export default App;
