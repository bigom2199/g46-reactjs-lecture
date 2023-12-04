import React ,{useState}  from 'react';

const counter = (props) => {
    const [counter,setCounter] = useState (0) ;
    const incrementHandler = () => {
        setCounter(counter + 1);
    }
    const decrementHandler = () => {
        setCounter(counter - 1);
    }
    return (
        
        <div className ='container' >
            <h3 >Counter: {counter} </h3>
            <button type='button' className='btn btn-success' onClick={incrementHandler}>Increment</button>
            <button type ='button' className='btn btn-danger' onClick={() => setCounter(counter -1)}>Decrment</button>
            <button type='button' className='btn btn-secondary' onClick={() => setCounter(0)}>Reset</button>

        </div>
    );
};

export default Counter;