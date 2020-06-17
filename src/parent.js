import React from 'react'
import Child from "./Child";
import Childtwo from "./Childtwo";
import "./App.css";
export default function parent(props) {
    console.log(props);
    return (
        <div>
            <Child/>
            <Childtwo/>
        </div>
    )
}
