import React, { Component } from 'react';
import arr from "./arr";

class Chat extends Component {
  constructor(props) {
   super(props);
   this.state = {
     total: this.props.countVal,
     arrNext: 0,
     count: this.props.countVal,
     showtext: false,
     text: "Ready? Let's Go!",
     end: false
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleStart = this.handleStart.bind(this);
   this.decrement = this.decrement.bind(this);
 }

  handleChange() {

  }

  handleStart() {
    this.setState({
      showtext: true
    });
  }
  decrement() {
    this.setState((state) => ({
      count: state.count - 1,
      arrNext: state.arrNext + 1
    }));
    if (this.state.count === (this.state.total-2)) {
      this.setState((state) => ({
        text: arr[0]
      }));
    } else if (this.state.count === (this.state.total/2)) {
      this.setState((state) => ({
        text: arr[1]
      }));
    } else if (this.state.count === (this.state.total * 1/4)) {
      this.setState((state) => ({
        text: arr[2]
      }));
    } else if (this.state.count === 3) {
      this.setState((state) => ({
        text: arr[3]
      }));
    } else if (this.state.count === 2) {
      this.setState((state) => ({
        text: arr[4]
      }));
    } else if (this.state.count === 1) {
      this.setState((state) => ({
        text: arr[5]
      }));
    } else if (this.state.count === 0) {
      this.setState((state) => ({
        end: true
      }));
    }
  }

  render() {
    return (
      <div>
      {(!this.state.showtext)?
      <div><button onClick={this.handleStart}> Start? </button> </div>: (!this.state.end)?
      <div><p> {this.state.count} </p>
      <button onClick={this.decrement}> I did one! </button>
      <p> {this.state.text} </p></div>:
      <p> Ayy you did it! Good Job! </p>
      }
      </div>
    );
  }
}

export default Chat;
