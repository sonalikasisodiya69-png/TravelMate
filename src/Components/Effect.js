import React, { useEffect, useState } from 'react'

export default function Effect() {
    const [count, setCount] = useState(0);
     const [name,setName] = useState("");

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    useEffect(() => {
        console.log("Count Changed");
    },[count]);
    useEffect(() => {
        console.log("Name Changed");
    },[name]);

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>

              <h1>Hi, Your name is {name}</h1>
             <input onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
        </div>
    )
}