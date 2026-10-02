import React, { useState } from "react";

function Visibility() {
    const [visible, setVisible] = useState(true);

    return (
        <div>
            {visible && <h2>Hello Sonalika</h2>}

            <button onClick={() => setVisible(!visible)}>
                Click
            </button>
        </div>
    );
}

export default Visibility;