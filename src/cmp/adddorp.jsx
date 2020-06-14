import React from 'react';

export default class Add extends React.Component {

 constructor(props) {
  super(props);
  //console.log(this.state.univ.ctr.x);
 }

 handleClick() {
 }

 render() {
  return (
   <div>
    <button onClick={this.handleClick}>
     +
    </button>
   </div>)
 }
}
