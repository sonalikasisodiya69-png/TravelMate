import React, { useState } from "react";

function Bulb() {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <h2>{isOn ? "💡 Bulb ON" : "🌑 Bulb OFF"}</h2>

            <button onClick={() => setIsOn(!isOn)}>
                Click
            </button>
        </div>
    );
}

export default Bulb;