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
import Config from './cmp/config.jsx';

class Game extends Component {
  constructor(props) {
    super(props);
    var ctr = {x:   0, y:   0, w: 600, h: 600, cb: '9af', cf: '000'};
    var cds = {x: 100, y: 100, w:   4, h:   4, cb: 'd00', cf: 'ff0'};
    this.state = {
      univ: [ctr, cds]
    };
  }
  render() {
    return (
     <HashRouter>
      <div className="game">
        <div><Header /></div>
        <div className="content">
         <Switch>
          <Route exact path="/" component={Crater}/>
          <Route path="/add" component={Add}/>
          <Route path="/config" component={Config}/>
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
