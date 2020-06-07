import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Switch,
  HashRouter
} from "react-router-dom";
import Header from './cmp/header.jsx';
import Crater from './cmp/crater.jsx';
import Add from './cmp/adddorp.jsx';

class Game extends Component {
  render() {
    return (
     <HashRouter>
      <div className="game">
        <div><Header /></div>
        <div className="content">
         <Switch>
          <Route exact path="/" component={Crater}/>
          <Route path="/add" component={Add}/>
         </Switch>
        </div>
      </div>
     </HashRouter>
    );
  }
}

ReactDOM.render(
 <Game />,
 document.getElementById('root')
);
