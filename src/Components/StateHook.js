import React, { useState } from 'react'

function StateHook() {
    const [name,setName] = useState("");
    const [age,setAge] = useState(0);
    const [email,setEmail] = useState("");
    const [result, setResult] = useState("");
    const [gender, setGender] = useState("");
    const [city, setCity]=useState("");
    const [course, setCourse] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

    setResult(
      `Your name is ${name}, your age is ${age} and your email is ${email}, you are a ${gender} from ${city} and you have selected ${course} course.`
    );
  };


    
    return (
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input onChange={(e)=>setName(e.target.value)} placeholder='Enter Your Name' />
                    <br /><br />

                <label>Age: </label>
                <input onChange={(e)=>setAge(e.target.value)} placeholder='Enter Your Age'/>
                     <br /><br />

                <label>Email: </label>
                <input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Your Email'/>
                    <br /><br />

                    <label>Gender: </label>
     <select onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Other">Other</option>
        </select>
       <br /><br />


       <label>City: </label>
     <input
           type="text"
             value={city}
             onChange={(e) => setCity(e.target.value)}/>
            <br /><br />
          
          <label>Course: </label>
<select value={course} onChange={(e) => setCourse(e.target.value)}>
  <option value="">Select Course</option>
  <option value="React JS">React JS</option>
  <option value="JavaScript">JavaScript</option>
  <option value="MERN Stack">MERN Stack</option>
</select>
          <br /><br />

     <button type="submit">Submit</button>
            </form>
            <h3>{result}</h3>   
        </div>
    );
};

export default StateHook;