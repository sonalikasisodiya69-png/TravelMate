import React, {useState} from "react";

function TemperatureConverter() {
    const [celsius, setCelsius] = useState("");
    const [fahrenheit, setFahrenheit] = useState("");

    const handleCelsiusChange = (e) => {
        const celsiusValue = e.target.value;
        setCelsius(celsiusValue);
        setFahrenheit(celsiusValue !== "" ? (celsiusValue * 9/5 + 32).toFixed(2) : "");
    };

    const handleFahrenheitChange = (e) => {
        const fahrenheitValue = e.target.value;
        setFahrenheit(fahrenheitValue);
        setCelsius(fahrenheitValue !== "" ? ((fahrenheitValue - 32) * 5/9).toFixed(2) : "");
    };

   return(
    <div>
        <h2>6.Temperature Converter :-</h2>
        <label>Celsius: </label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} /> 
        <br /><br /> 
        <label>Fahrenheit: </label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
        <br /><br />
        <button onClick={() => {
            setCelsius("");
            setFahrenheit("");
        }}>Clear</button>
    </div>
    );

};

export default TemperatureConverter;