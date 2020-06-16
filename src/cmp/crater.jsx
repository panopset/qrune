import React, { Component } from 'react';
import { move } from './move.js';

export default class Crater extends Component {

 constructor(props) {
  super(props);
  
  
  
  
  this.dorpRef = React.createRef();
 }

 render() {
  return (
<div ref={ (divElement) => { this.divElement = divElement } } className="bb" ><svg ref={this.dorpRef}/></div>
  );
 }

 componentDidMount() {
  var w = this.divElement.clientWidth;
  var h = this.divElement.clientHeight;
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
