export function move(coords) {
  var ih = getEnv() + getHero(coords);
  var rtn = {
   cds: coords,
   innerHTML: ih
  };
 return rtn;
}

var rw = window.innerWidth/2;
var rh = window.innerHeight/2;

function getEnv() {
 
 return '<ellipse class="crater" cx="' + rw + '" cy="' + rh + '" rx="' + rw + '" ry="' + rh + '" />';
}

function getHero(coords) {
 coords.y = coords.y + getOffset();
 coords.x = coords.x + getOffset();
 return '<ellipse style="fill:#cdf;stroke:#d00;stroke-width:1;"' +
           ' cx=' + (200 + coords.x) + ' cy="' + (100 + coords.y) + '" rx="2" ry="2" />';
}

function getOffset() {
 return (Math.floor((Math.random() * 3))) - 1;
}