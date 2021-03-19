import React, { Component, createContext } from 'react'
import Checkbox from './Checkbox'
import './App.css';


class Kadai extends Component {
    state = {
        checkedItems: new Map()
    }
    constructor(props) {
        super(props);

    }

    handleChange = e => {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({
            checkedItems: prevState.checkedItems.set(item, isChecked)
        }));
    };
    render() {
        const checkboxes = [
            {
                name: "選択A",
                key: "checkBox1",
                label: "Check Box 1"
            },
            {
                name: "選択B",
                key: "checkBox2",
                label: "Check Box 2"
            },
            {
                name: "選択C",
                key: "checkBox3",
                label: "Check Box 3"
            },
            {
                name: "選択D",
                key: "checkBox4",
                label: "Check Box 4"
            }
        ];
        const checkboxesToRender = checkboxes.map(item => {
            return (
                
                <div className="Kadai-Border">
                <label key={item.key}>
                    <Checkbox
                        name={item.name}
                        checked={this.state.checkedItems.get(item.name) || false}
                        onChange={this.handleChange}
                        type="checkbox"
                    />
                    {item.name}
                </label>
                </div>
            );
        });
        
        return (
        <>
            {checkboxesToRender}
        </>

        );
    }
}

export default Kadai;