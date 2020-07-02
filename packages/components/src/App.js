
import React from "react";
import { Message } from "./components/Message";
import { PlayerList } from "./components/PlayerList";

export const App = () => (
  <div>
    <h1 className="text-center h-1">Hello fuction component</h1>
    <Message greeting="Hello" name="Bob"/>
    <Message greeting="Hi there" name="Dora"/>
    <PlayerList />
  </div>
);

export default App;