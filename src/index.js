import React from 'react';
import ReactDOM from 'react-dom';
import Board from './cmp/rules.jsx';

var x = 0;
var y = 0;

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-header">
          <Board />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
 <Game />,
 document.getElementById('root')
);

var theBoxes = document.querySelectorAll(".qr");

var kute = require("kute.js");
require("kute.js/kute-svg");
require("kute.js/kute-css");
require("kute.js/kute-attr");
require("kute.js/kute-text");

var animateFontSize = kute.allFromTo(
  theBoxes,
  { fontSize: '2em' },
  { fontSize: '4em' },
  { offset: 100, duration: 200, repeat: 10, yoyo: true}
);

var goButton = document.querySelector(".gobtn");

goButton.addEventListener(
  "click",
  function() {
    animateFontSize.start();
  },
  false
);

var anim = document.getElementById('foo');

function step() {
 if (y++ > 20) {
  y = 0;
 }
 if (x++ > 50) {
  x = 0;
 }
 x++;
 anim.innerHTML='<ellipse class="bb" cx="' + (200 + x) + '" cy="' + (80 + y) + '" rx="100" ry="50" />';
 window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

