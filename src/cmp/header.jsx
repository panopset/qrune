import React, { Component } from 'react';

import {
  NavLink,
} from "react-router-dom";

export default class Header extends Component {
 render() {
  return (
  
<div>
<NavLink exact to="/">Home</NavLink>
&nbsp;&nbsp;~&nbsp;&nbsp;
<NavLink to="/add">+</NavLink>
&nbsp;&nbsp;~&nbsp;&nbsp;
<a href="https://github.com/panopset/qrune">Source</a>
</div>

  )
 }
}
