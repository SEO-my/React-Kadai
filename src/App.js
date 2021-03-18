import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


class Subject extends Component{
  render() {
    return(
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    )
  }
}

class TOC extends Component {
  render() {
    return(
      <nav>
      <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="1.html">CSS</a></li>
          <li><a href="1.html">Javascript</a></li>
      </ul>
  </nav>    
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="For UI"></Subject>
        <TOC></TOC>
      </div>
    );
  }
}

export default App;

// function App() {
//   return (
//     <p>Hello, React!</p>
    
//   );
// } 
