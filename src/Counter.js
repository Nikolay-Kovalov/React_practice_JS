import React from "react";

class Counter extends React.Component{
    render() {
        const { count, onIncrement, onDecrement } = this.props;

        return (
            <div>
                <p>Count: {count}</p>
                <button onClick={onDecrement}>Decrement</button>
                <button onClick={onIncrement}>Increment</button>
            </div>
        )
    }
}

export default Counter;