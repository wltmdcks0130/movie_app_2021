import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("hello");
  }
  state = {
    count: 0
  }

  add = () => {
    console.log("add");
    this.setState(current => ({count:current.count + 1}));
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({count:this.state.count - 1}));
  };
  //render 다음에 자동 실행
  componentDidMount(){
    console.log("component rendered");
  }

  componentDidUpdate(){
    console.log("I just updated");
  }

  componentWillUnmount(){
    console.log("good bye");
  }
  render(){
    console.log("I'm render");
    return (
      <div>
        <h1>The number is : {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }


}

export default App;
