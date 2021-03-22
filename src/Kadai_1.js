import React, { Component } from 'react'
import './App.css';


class Kadai_1 extends Component{
    constructor(props) {
        super(props)
        /* this.handleRadio = this.handleRadio.bind(this) */
/*         this.handleCheck = this.handleCheck.bind(this) */
        }
    state = {
        checkGroup: {
            A: false,
            B: false,
            C: false,
            D: false
        }


        ,aa:""
        ,id:""
        ,radioGroup: {
            A: false,
            B: false,
        }
        ,na:""
        ,selectGroupA: {
            A: false,
            B: false,
            }
        ,da:""
        
        ,isToggleOn : true
     }
     

     handleCheck = e => {
        const obj = {}
        obj[e.target.value] = e.target.checked 
        console.log(e.target.checked);
        var temp = e.target.name;
        if ( e.target.checked === true) {
            for(let i = 0; i< 3; i++) {
                this.setState({
                    checkGroup: obj
                    ,aa: temp
                })
            
            }
        }
    }


     changeId = (e) =>{
        var name=e.target.name;
        console.log(e.target.value);
        var temp = e.target.value;
        this.setState({
            [name]:temp
        })
    }
    
    handleRadio = (e) => {
        const obj = {}
        obj[e.target.value] = e.target.checked // true
        console.log(e.target.checked);
        var temp = e.target.name;
        this.setState({
            radioGroup: obj
            ,na:temp
        })
      }

      handleSelectA = e => {
        const obj = {}
        obj[e.target.value] = e.target.checked 
        console.log(e.target.checked);
        var temp = e.target.value;
        const i=5;
        this.setState({
            ca:temp
        });
    };
    handleSelectB = e => {
        console.log(e.target.value);
        var temp = e.target.value;
        this.setState({
            da:temp
        });
    };


    clickButton = (e) => {
        console.log(e.target.value);

        if(this.state.isToggleOn === true) {
            this.setState({
            isToggleOn: !this.state.isToggleOn
            ,aa:this.state.aa
            ,id:this.state.id
            ,na:this.state.na
            ,ca:this.state.ca
            ,da:this.state.da
            })
        }else {
            this.setState({
            isToggleOn: !this.state.isToggleOn
            ,aa:""
            ,id:""
            ,na:""
            ,ca:""
            ,da:""
        })
    }
}
    


    render() {
        
        return (
          
        <body>
            <div className="Kadai-Wrap">
            <div>
            <form className="Kadai-Border">
                <p style={{backgroundColor:"aquamarine", margin:"0", height:"30px"}}>選択</p>
                <input type="Checkbox" name="選択A" checked={this.state.checkGroup['A']} 
                onChange={this.handleCheck}></input>選択A<br></br>
                <input type="Checkbox" name="選択B" checked={this.state.checkGroup['B']} 
                onChange={this.handleCheck}></input>選択B<br></br>
                <input type="Checkbox" name="選択C" checked={this.state.checkGroup['C']} 
                onChange={this.handleCheck}></input>選択C<br></br>
                <input type="Checkbox" name="選択D" checked={this.state.checkGroup['D']} 
                onChange={this.handleCheck}></input>選択D
            </form>
            <span className="susu1">{this.state.aa}</span>  
            
            </div>
            
            <div className="Kadai-Border">
                <p style={{backgroundColor:"orange", margin:"0", height:"30px"}}>INPUT</p>
                <input style={{width: "-webkit-fill-available", height:"30px"}} name="id" value={this.state.id} onChange={this.changeId}></input> 
            </div>
            <span className="susu2">{this.state.id}</span> 

            <div className="Kadai-Border">
            <p style={{backgroundColor:"yellow", margin:"0", height:"30px"}}>ラジオ</p>
            <form>
                A:<input type="radio" name="A" value="A" checked={this.state.radioGroup['A']} 
                onChange={this.handleRadio}></input>
                B:<input type="radio" name="B" value="B" checked={this.state.radioGroup['B']} 
                onChange={this.handleRadio}></input>
            </form>
            </div>
            <span className="susu3">{this.state.na}</span>  

            <div className="Kadai-Border">
            <p style={{backgroundColor:"yellowgreen", margin:"0", height:"30px"}}>コンボボックスA</p>
            <form>
                <select style={{width: "-webkit-fill-available", height:"30px"}} checked={this.state.selectGroupA['A']}  onChange={this.handleSelectA}>
                    <option value=""></option>
                    <option name="A" value="A" >A</option>
                    <option name="B" value="B" >B</option>
                    <option name="C" value="C" >C</option>
                    <option name="D" value="D" >D</option>
                    <option name="E" value="E" >E</option>
                </select>
            </form>
            </div>
            <span className="susu4">{this.state.ca}</span>  

            <div className="Kadai-Border">
            <p style={{backgroundColor:"deepskyblue", margin:"0", height:"30px"}}>コンボボックスA</p>
            <form>
                <select style={{width: "-webkit-fill-available", height:"30px"}} value={this.state.value} onChange={this.handleSelectB}>
                    <option value=""></option>
                    <option name="a" value="a" >a</option>
                    <option name="b" value="b" >b</option>
                    <option name="c" value="c" >c</option>
                    <option name="d" value="d" >d</option>
                    <option name="e" value="e" >e</option>
                </select>
            </form>
            </div>
            <span className="susu5">{this.state.da}</span>  

            <div className="btn"> 
                <button onClick={this.clickButton}>{this.state.isToggleOn ? 'ボタン' : '戻る'}</button>
                <sapn className="susu6"> 選択状態<br></br>
                <p onClick={this.clickButton}>選択： {this.state.aa}</p>
                <p onClick={this.clickButton}>INPUT： {this.state.id}</p>
                <p onClick={this.clickButton}>ラジオ： {this.state.na}</p>
                <p onClick={this.clickButton}>コンボボックスA： {this.state.ca}</p>
                <p onClick={this.clickButton}>コンボボックスB： {this.state.da}</p>
                </sapn>
            </div>
            </div>
        </body>
        );
    }
}

export default Kadai_1;