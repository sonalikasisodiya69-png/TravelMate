import React from 'react'
export default function Greet(props) {
  return (
    <div>
        <h1>Hello {props.name}</h1>
        <h1>You are attending {props.course} classes</h1>
        <h1>At {props.campus} Campus</h1>
        <img src={props.photo}/>
        <hr/>
    </div>
  )
}





