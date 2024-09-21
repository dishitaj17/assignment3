import React, { useState } from "react";

const Counter = () => {
    
    const [counter, setCounter] = useState(0);
 
    // Function is called everytime increment button is clicked
    const handleClick1 = () => {

        // Counter state is incremented
        setCounter(counter + 1);
    };
 
    // Function is called everytime decrement button is clicked
    const handleClick2 = () => {

        // Counter state is decremented
        setCounter(counter - 1);
    };

    return (
        <div className="counter">
            Counter App
            <div className="counter1">
                {counter}
            </div>

            <div className="buttons">
                <button className="btn1"
        
                    onClick={handleClick1}
                >
                    Increment
                </button>
                <button className="btn2"
                    
                    onClick={handleClick2}
                >
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default Counter