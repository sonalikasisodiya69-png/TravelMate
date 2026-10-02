import {useState} from "react";

function CharacterCounter() {
    const [text, setText] = useState("");

    const setChange = (event) => {
        setText(event.target.value);
    };
    return (
        <div>
            <h2>5.Character Counter :-</h2>
            <textarea value={text} onChange={setChange} />
            <p>Character count: {text.length}</p>
            <button onClick={() => setText("")}>Clear</button>
        </div>
    );
}

export default CharacterCounter;