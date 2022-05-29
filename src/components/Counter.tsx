import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState<number>(0)

    const handleIncrease = ()=>{
        setCount(count+1);
    }

    return (
        <div>
            <h1>Hello to counter</h1>
            <p>Count: {count}</p>
            <button onClick={handleIncrease}>Increase</button>
            <button>Decrease</button>
        </div>
    );
};

export default Counter;