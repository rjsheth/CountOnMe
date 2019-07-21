import React, { Component } from 'react';
import logo from '../Images/accounted.png';
import { Link } from 'react-router-dom';
import './NavScreen.css';

class HomeScreen extends Component {

  render() {
    return (
      <div>
        <div className="Mental">
          Mental health
        </div>
        <div> <p> </p> </div>
        <div className="Health">
          Physical
          <Link to={'/NavScreen/ChatEx'}> Physical </Link>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
