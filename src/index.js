import React from 'react';
import ReactDOM from 'react-dom';

const element = <div>

<div class="qr">
.
</div>


<div>
<button class="opacity">Go</button>
</div>



</div>;

ReactDOM.render(
 element,
 document.getElementById('root')
);

var theBoxes = document.querySelectorAll(".qr");

var kute = require("kute.js"); //grab the core
require("kute.js/kute-svg"); // Add SVG Plugin
require("kute.js/kute-css"); // Add CSS Plugin
require("kute.js/kute-attr"); // Add Attributes Plugin
require("kute.js/kute-text"); // Add Text Plugin

var animateOpacity = kute.allFromTo(
  theBoxes,
  { opacity: 1 },
  { opacity: 0.1 },
  { offset: 100, duration: 800 }
);

var animateFontSize = kute.allFromTo(
  theBoxes,
  { fontSize: '2em' },
  { fontSize: '4em' },
  { offset: 100, duration: 200, repeat: 10, yoyo: true}
);

var opacityButton = document.querySelector(".opacity");

opacityButton.addEventListener(
  "click",
  function() {
    animateFontSize.start();
  },
  false
);
