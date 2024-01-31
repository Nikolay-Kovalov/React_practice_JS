import React from "react";
import Counter from "./Counter";

class CounterContainer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    onBtnIncrement = () => {
        this.setState((prevState) => ({
           count: prevState.count+1 
        }))
    }
    onBtnDecrement = () => {
        this.setState((prevState) => ({
            count:prevState.count-1
        }))
    }

    render() {
        const { count } = this.state;
        return (
            <Counter count={count} onIncrement={this.onBtnIncrement} onDecrement={this.onBtnDecrement} />
        
        )
    }
}

export default CounterContainer;