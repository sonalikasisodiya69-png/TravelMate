import React, { useState } from "react";

function Studentresult() {
    const [studentName, setStudentName] = useState("Rahul");
    const [marks, setMarks] = useState("78");

    const clearResult = () => {
        setStudentName("");
        setMarks("");
    };

    return (
        <div>
            <h2>7.Student Result :-</h2>

            <Props
                studentName={studentName}
                marks={marks}
                clearResult={clearResult}
                 
            />
        </div>
    );
}

function Props(props) {
    const result = props.marks >= 40 ? "Pass" : "Fail";

    return (
        <div>
            <p>Student Name: {props.studentName}</p>
            <p>Marks: {props.marks}</p>
            <p>Result: {result}</p>
            <button onClick={props.clearResult}>Clear</button>
            
        </div>
    );
}

export default Studentresult;
