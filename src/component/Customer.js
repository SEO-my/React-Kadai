import React, { Component } from 'react'

class Customer extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:"blue", width:"300px"}}>コンボボックスA<br></br>
            <form>
                <select value={this.state.value} onChange={this.handleSelectB}>
                    <option value=""></option>
                    <option name="this.props.a" value="a" >a</option>
                    <option name="b" value="b" >b</option>
                    <option name="c" value="c" >c</option>
                    <option name="d" value="d" >d</option>
                    <option name="e" value="e" >e</option>
                </select>
                <p>{this.state.da}</p>
            </form>
            </div>
        )
    }
}