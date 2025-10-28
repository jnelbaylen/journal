import { useState } from "react";

export default function MyButton() {

    const [count, setCount] = useState(0);

    function handleClick() {
        alert('Hello, there');
    }

    function handleMessageCount() {
        setCount(count + 1)
        console.log("Counting...")
    }

    return (
        <div>
            <button className="btn-one" onClick={handleClick}>I'm a button</button>
            <button className="btn-two" onClick={handleMessageCount}>Clicked {count} times</button>
        </div>
    )
}


