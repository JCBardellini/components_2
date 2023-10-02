import React, { useState } from "react";
import "./index.css";

const ColorPicker = () => {
  const [currentColor, setCurrentColor] = useState("");

  // create a function that will prevent the form from refreshing
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // creating a function that will change my the background of the card depending on the radio button we pick
  const handleColorChange = (e) => {
    setCurrentColor(e.target.value);
  };

  return (
    <div id="color-container" className={currentColor}>
      <h2>Color Picker</h2>
      <div className="selection">
        <form onSubmit={handleSubmit}>
          <input
            type="radio"
            id="redLabel"
            name="color"
            value="red"
            checked={currentColor === "red"}
            onChange={handleColorChange}
          />
          <label htmlFor="redLabel">Red</label>
          <input
            type="radio"
            id="greenLabel"
            name="color"
            value="green"
            checked={currentColor === "green"}
            onChange={handleColorChange}
          />
          <label htmlFor="greenLabel">Green</label>
          <input
            type="radio"
            id="purpleLabel"
            name="color"
            value="purple"
            checked={currentColor === "purple"}
            onChange={handleColorChange}
          />
          <label htmlFor="purpleLabel">Purple</label>
          <input
            type="radio"
            id="blueLabel"
            name="color"
            value="blue"
            checked={currentColor === "blue"}
            onChange={handleColorChange}
          />
          <label htmlFor="purpleLabel">Blue</label>
        </form>
      </div>
    </div>
  );
};

export default ColorPicker;
