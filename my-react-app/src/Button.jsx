import React, {useState} from "react";


function Button(){

    let [name, setName] = useState("abdi");
    const [age, setAge] = useState(0);
    const [isEmployed, setEmployed] = useState(false);

    const updateName = () => {
        setName("Abdi Ahmed")
    }

    const updateAge = () => {
        setAge(age + 2);
    }

    const toggleEmployed = () => {
        setEmployed(!isEmployed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}> set Name</button>

            <p>Age: {age}</p>
            <button onClick={updateAge}> set age</button>

            <p>is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployed}> toggle employed</button>
        </div>
    )

}

export default Button;