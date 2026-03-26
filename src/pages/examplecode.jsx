import { useEffect, useState } from 'react';

// function Name() {
//     return (<>
//     </>);
// }

// export default Name;

function functionName(parameter1, parameter2) {
    // Function body (code to be executed)
    return result; // Optional return statement
}

function Counter() {

    const [count, setCount] = useState(0); // useState to manage counter state

    // useEffect will run after every render (initial + updates)
    useEffect(() => {
        console.log(`You clicked ${count} times`);

        // Optional: cleanup function (runs before component unmounts or next effect)
        return () => {
            console.log('Cleanup for count:', count);
        };
    }, [count]); // Only run effect when 'count' changes

    useEffect(() => {

    }, []);


    return (
        <div style={{ padding: '20px' }}>
            <h1>React Counter Example</h1>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>Click Me</button>
        </div>
    );
}

export default Counter;
