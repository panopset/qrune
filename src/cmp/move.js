export function move(coords) {
 if (coords.y++ > 4) {
  coords.y = 0;
  }
  if (coords.x++ > 4) {
   coords.x = 0;
  }
  coords.x++;
  var ih = '<ellipse style="fill:yellow;" cx=' + (200 + coords.x) + ' cy="' + (100 + coords.y) + '" rx="4" ry="4" />';
  var rtn = {
   cds: coords,
   innerHTML: ih
  };
 return rtn;
}
