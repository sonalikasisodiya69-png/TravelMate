import {useState} from "react";

function AgeCalculator() {
const [age, setage]= useState("0");
const [name, setname]= useState("");

return (

    <div>
        <h2>2.Age Calculator :-</h2>
        <input
         type="text" placeholder='Enter Your Name' value={name}
        onChange={(e)=>setname(e.target.value)}/>
        <br /><br />
        
        <input type="number" placeholder='Enter Your Age' value={age}
        onChange={(e)=>setage(e.target.value)}/>
        <br /><br />
         {name && age > 0 && (
        <div>
          <p>Hello {name}.</p>
          <p>You are {age} years old.</p>
          <p>In 5 years, you will be {Number(age) + 5}.</p>
        </div>
      )}
    </div>
  );
}

export default AgeCalculator;

