import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomeScreen from './Components/HomeScreen';
import NavScreen from './Components/NavScreen';
import ChatEx from './Components/ChatEx';
import Chat from './Components/Chat';

class App extends Component {

  // here is our UI
  // it is easy to understand their functions when you
  // see them render into our screen
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomeScreen}/>
          <Route exact path='/NavScreen' component={NavScreen}/>
          <Route exact path='/NavScreen/ChatEx' component={ChatEx}/>
          <Route exact path='/Chat' component={Chat} />
        </Switch>
      </div>
    );
  }
}

export default App;
