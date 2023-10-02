import { useState } from "react";

import "./App.css";
import NewsTicket from "./components/Component1";
import ColorPicker from "./components/Component2";
import UserProfileCard from "./components/Component3";
import RateReview from "./components/Component4";

function App() {
  return (
    <>
      <NewsTicket />
      <ColorPicker />
      <UserProfileCard />
      <RateReview />
    </>
  );
}

export default App;
