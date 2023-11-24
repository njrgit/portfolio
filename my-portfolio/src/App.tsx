import React from "react";
import "./App.css";
import Header from "./Components/Header/header";

const welcomeMessage = "Niro's World"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header welcomeMessage={welcomeMessage} />
      </div>
    );
  }
}

export default App;
