import React, { Component } from 'react';
import { move } from './move.js';

export default class Crater extends Component {
 
 constructor(props) {
  super(props);
  this.dorpRef = React.createRef();
 }

 render() {
  return (
  
  <div className="bb" >

<svg height="80" width="500">
<g>
  <ellipse className="ab" cx="200" cy="20" rx="100" ry="50" />
</g>
</svg>

<svg ref={this.dorpRef} height="100" width="500"/>

</div>


  );
 }
 
 
 componentDidMount() {
    
var x = 0;
var y = 0;
var coords = [{x: 0, y: 0}];
    

var anim = this.dorpRef.current;

 function step() {
    if (y++ > 20) {
    y = 0;
   }
   if (x++ > 50) {
    x = 0;
   }
   x++;
   
   
   anim.innerHTML='<ellipse cx="200" cy="20" rx="100" ry="30" />';
   
   window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
  foo();
  
  function foo() {
  
  
   anim.innerHTML='<ellipse cx="' + (200 + x) + '" cy="' + (20 + y) + '" rx="100" ry="30" />';
  
  
  var rslt = move(coords);
   
   coords = rslt.coords;

  
  }
  
  
 }
 
}
