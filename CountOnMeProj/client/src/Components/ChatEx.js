import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Chat from './Chat';

class ChatEx extends Component {
  constructor(props) {
   super(props);
   this.state = {
     thisPage: true,
     value: ''
   };

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   alert(this.state.value);
   this.setState({
     thisPage: false
   });
   event.preventDefault();
 }

  render() {
    return (
      <div>
      {this.state.thisPage?
      <form onSubmit={this.handleSubmit}>
        <label>
          What is your goal?
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form> :
      <Chat countVal={parseInt(this.state.value,10)} />
      }
      </div>
    );
  }
}
// <input type="submit" value="Submit"/>
export default ChatEx;
