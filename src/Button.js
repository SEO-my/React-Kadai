import React, { Component, createContext } from 'react'

class Button extends Component {
    constructor(props){
        super();
    }
    state = {
        super();

        const {color, width, height, name} = props;
    }

    render() {
        return (
            <>
            <input style={{backgroundColor:{this.props.color}} name="button1" type="Button" value="Button1" ></input>
            <input style={{backgroundColor:"yellow", width:"200px", height:"30px"}} name="button1" type="Button" value="Button1" ></input>
            <input style={{backgroundColor:"orange", width:"400px", height:"50px"}} name="button1" type="Button" value="Button1" ></input>
            </>
        );
    }
}

export default Button;