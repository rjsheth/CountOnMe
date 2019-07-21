import React, { Component } from 'react';
import accounted from './../Images/accounted.png';
import { Link } from 'react-router-dom';

//import keys from './twiliokeys';
import bodyParser from 'body-parser';

class HomeScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      HomeScreen: false,
      NavScreen: false
    }

    this.nextScreen = this.nextScreen.bind(this);
  }

  nextScreen = () => {

  }

  render() {
    return (
      <div>
        <img src={accounted}/>
        <Link to={'/NavScreen'}> To NavScreen </Link>
      </div>
    );
  }
}

export default HomeScreen;
