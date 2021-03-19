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
            選択A: false,
            選択B: false,
            選択C: false,
            選択D: false,
        }
        ,aa:""
        ,id:""
        ,radioGroup: {
        A: false,
        B: false,
        }
        ,na:""
        ,ca:""
        ,da:""
        
        ,isToggleOn : true

     }


     handleCheck = e => {
        var item = e.target.name;
        console.log(e.target.name);
        var temp = e.target.name;
        this.setState({
            checkGroup: item
            ,aa: temp
        });
    };

     changeId = (e) =>{
        var name=e.target.name;
        console.log(e.target.value);
        var temp = e.target.value;
        this.setState({
            [name]:temp
        })
    }
    
    handleRadio = (e) => {
        var obj = {}
        obj[e.target.value] = e.target.checked // true
        console.log(e.target.name);
        var temp = e.target.name;
        this.setState({
            radioGroup: obj
            ,na:temp
        })
      }

      handleSelectA = e => {
        console.log(e.target.value);
        var temp = e.target.value;
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

    openModal = () => {
        this.setState({ isModalOpen: true });
      }
      
      closeModal = () => {
        this.setState({ isModalOpen: false }); 
      }

    clickButton = (e) => {
        console.log(e.target.value);
        this.setState({
            isToggleOn: !this.state.isToggleOn
        })
    }

    


    render() {
        
        return (
            <>
            <div style={{backgroundColor:"green", width:"300px"}}>選択<br></br>
            <form className="Kadai-Border">
                <input type="Checkbox" name="選択A" checked={this.state.checkGroup['選択A']}
                onChange={this.handleCheck}></input>選択A<br></br>
                <input type="Checkbox" name="選択B" checked={this.state.checkGroup['選択B']}
                onChange={this.handleCheck}></input>選択B<br></br>
                <input type="Checkbox" name="選択C" checked={this.state.checkGroup['選択C']}
                onChange={this.handleCheck}></input>選択C<br></br>
                <input type="Checkbox" name="選択D" checked={this.state.checkGroup['選択D']}
                onChange={this.handleCheck}></input>選択D
                <p>{this.state.aa}</p>

            </form>
            </div>
            
            <div style={{backgroundColor:"orange", width:"300px"}}>INPUT<br></br>
                <input className="Kadai-Border" name="id" value={this.state.id} onChange={this.changeId}></input> {this.state.id}
            </div>

            <div style={{backgroundColor:"yellow", width:"300px"}}>ラジオ<br></br>
            <form>
                A:<input type="radio" name="A" value="A" checked={this.state.radioGroup['A']} 
                onChange={this.handleRadio}></input>
                B:<input type="radio" name="B" value="B" checked={this.state.radioGroup['B']} 
                onChange={this.handleRadio}></input>
                <p>{this.state.na}</p>
            </form>
            </div>

            <div style={{backgroundColor:"green", width:"300px"}}>コンボボックスA<br></br>
            <form>
                <select value={this.state.value} onChange={this.handleSelectA}>
                    <option value=""></option>
                    <option name="A" value="A" >A</option>
                    <option name="B" value="B" >B</option>
                    <option name="C" value="C" >C</option>
                    <option name="D" value="D" >D</option>
                    <option name="E" value="E" >E</option>
                </select>
                <p>{this.state.ca}</p>
            </form>
            </div>
            <div style={{backgroundColor:"blue", width:"300px"}}>コンボボックスA<br></br>
            <form>
                <select value={this.state.value} onChange={this.handleSelectB}>
                    <option value=""></option>
                    <option name="a" value="a" >a</option>
                    <option name="b" value="b" >b</option>
                    <option name="c" value="c" >c</option>
                    <option name="d" value="d" >d</option>
                    <option name="e" value="e" >e</option>
                </select>
                <p>{this.state.da}</p>
            </form>
            </div>

            <div>
                <button onClick={this.clickButton}>{this.state.isToggleOn ? 'ボタン' : '戻る'}</button>
            </div>
         

            </>
        );
    }
}

export default Kadai_1;