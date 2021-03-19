import React, { Component } from 'react';

class Test1 extends Component{
    state = {
        number:0
     }

    numberControl=(Isplus)=>{
        this.setState({
            number:this.state.number + (1* Isplus ? 1 : -1)
        })

    }

    render() {
        return (
            <>
                <div>{this.state.number}</div>
                <input style={{background:"green"}} type ="button" value="UP" onClick={()=>this.numberControl(true)}></input>
                <input style={{background:"green"}} type ="button" value="DOWN" onClick={()=>this.numberControl(false)}></input>
            </>
        );
    }
}

export default Test1;