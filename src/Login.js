import { render } from '@testing-library/react'
import React, { Component } from 'react'


class Login extends Component {
    state = {
        id:"",
        password:"",
        text:"",
        IsFail:false
    }
    clickLogin = () =>{
        // console.log("Hello");
        if(this.state.id==="aaa" && this.state.password==="111"){
            this.setState({
                text:"Succeece"
            })
        } else {
            this.setState({
                text:"Fail"
            })
        }
    }

    changeId = (e) => {
        var name=e.target.name;

        console.log(name);
        var temp = e.target.value;

        this.setState({
            [name]:temp
        });
    }




    render() {
        return (
            <>
            {this.state.text === "" &&
            <div>

            ID : <input type="input" placeholder="INPUT ID" name="id" value ={this.state.id} onChange={this.changeId}></input><br></br>
            PW : <input type="input" placeholder="INPUT PASSWORD" name="password" value ={this.state.password} onChange={this.changeId}></input><br></br>
            <input type="button" value="Login" onClick={this.clickLogin}></input>
            </div>
        }
        {this.state.text}
        </>
        );
    }
}

export default Login;