import React, { useState } from "react";

function TrafficLight() { 
    const [color, setColor] = useState("red");

const handleColorChange = (newColor) => {
    setColor(newColor);
};

return (
    <div>
        <h2>8.Traffic Light :-</h2>
        <button 
         style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px 20px",
                    margin: "5px",
                    border: "none",
                    borderRadius: "5px"
         }}
         onClick={() => handleColorChange("red")}>Red</button>
        <button 
         style={{
                    backgroundColor: "yellow",
                    color: "black",
                    padding: "10px 20px",
                    margin: "5px",
                    border: "none",
                    borderRadius: "5px"
         }}
         onClick={() => handleColorChange("yellow")}>Yellow</button>
        <button 
         style={{
                    backgroundColor: "green",
                    color: "white",
                    padding: "10px 20px",
                    margin: "5px",
                    border: "none",
                    borderRadius: "5px"
            }}
         onClick={() => handleColorChange("green")}>Green</button>

        <h3>Current Color: {color}</h3>
        {color === "red" && <h3>STOP</h3>}
            {color === "yellow" && <h3>WAIT</h3>}
            {color === "green" && <h3>GO</h3>}
        </div>
    )
}

export default TrafficLight;





