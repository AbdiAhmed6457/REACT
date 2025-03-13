import { useState } from "react";

function Counter() {
    const [count, setCounter] = useState(0);
   
    const styleP = {
        backgroundColor: "yellow", // Fixed spelling mistake
        fontSize: "3rem",
        fontWeight: "bold",
        cursor: "pointer",
        padding: "10px",
        textAlign: "center"
      };

      const increaseHandle = () => {
        setCounter(count + 1);
      };
    
      const decreaseHandle = () => {
        setCounter(count - 1);
      };

    return(
        <>
           <p style={styleP}>{count}</p>
           <button onClick={increaseHandle}>Increase</button>
           <button onClick={decreaseHandle}>Decrease</button>
        </>
    )

}

export default Counter;