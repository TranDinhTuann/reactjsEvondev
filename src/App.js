import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Game from "./components/tictactoe/Game";
function App() {
  // const name="Evondev";
  return (
    <div>
    {/* children : html, component, text, variable */}
    {/* <YoutubeList>
      {name}
    </YoutubeList> */}
    <Game></Game>
    </div>
  );
}

export default App;
