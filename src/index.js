import React from 'react';
import ReactDOM from 'react-dom';

var x = 0;

const element = <div>



<div>
<button class="gobtn">Go</button>
<a href="https://github.com/panopset/qrune">Source.</a>
</div>

<div class="qr">
.
</div>

<svg height="140" width="500">
  <ellipse class="yb" cx="200" cy="80" rx="100" ry="50" />
</svg>

<svg id="foo" height="140" width="500">
  <ellipse class="bb" cx="200" cy="80" rx="100" ry="50" />
</svg>

</div>;

ReactDOM.render(
 element,
 document.getElementById('root')
);

var yb = document.querySelectorAll(".yb");

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

var animateLocation = kute.allFromTo(
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
 if (x > 500) {
  x = 0;
 }
 x++;
 anim.innerHTML='<ellipse class="bb" cx="' + (200 + x) + '" cy="80" rx="100" ry="50" />';
 window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

