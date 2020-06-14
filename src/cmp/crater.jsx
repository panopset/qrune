import React, { Component } from 'react';
import { move } from './move.js';

export default class Crater extends Component {

 constructor(props) {
  super(props);
  this.dorpRef = React.createRef();
 }

 render() {
  return (
<div className="bb" ><svg ref={this.dorpRef} height="600" width="600"/></div>
  );
 }

 componentDidMount() {
  var coords = {x: 0, y: 0};
  var anim = this.dorpRef.current;
  function step() {
   gamecycle();
   window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
  function gamecycle() {
   var rslt = move(coords);
   coords = rslt.cds;
   anim.innerHTML = rslt.innerHTML;
  }
 }
}
