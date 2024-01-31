import React from "react";

class FormFirst extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            inputValue: "",
            isValid: true
        }
    }

    change = (evt) => {
        const value = evt.target.value;
        const isValid = value.length >=8 
        this.setState({inputValue: value, isValid})
    }

    submit = (evt) => {
        evt.preventDefault();
        if (this.state.isValid) {
            alert("Submitted:" + this.state.inputValue);
        } else {
            alert("Input is not correct")
        }
    }

    render() {
        const { isValid } = this.state;

        return (
            <form onSubmit={this.submit}>
                <label htmlFor="inp">Enter text</label>
                <input style = {{borderColor: isValid ? "green" : "red"}} id="inp" type="text" value={this.state.inputValue} onChange={this.change} />
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default FormFirst;