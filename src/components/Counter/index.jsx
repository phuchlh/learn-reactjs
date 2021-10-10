import React, { useState } from 'react';

Counter.propTypes = {};

function Counter(props) {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            {counter}

            <button onClick={()=> setCounter(x=> x+1)}>Counter</button>
        </div>
    );
}

export default Counter;