import { useState } from "react";

function Color() {
      const [color, setColor]  = useState("blue")

      const handleColor = (e) => {
        setColor(e.target.value);
        
      }
    return(
       
          <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color}}>
              <p>select Color</p>
            </div>
            
            <label htmlFor=""> Select Color</label>
            <input type="color" value={color} onChange={handleColor}/>
          </div>
       
    )
}

export default Color;