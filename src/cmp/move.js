export function move(coords) {
 if (coords.y++ > 20) {
  coords.y = 0;
  }
  if (coords.x++ > 50) {
   coords.x = 0;
  }
  coords.x++;
  var ih = '<ellipse cx=' + (200 + coords.x) + ' cy="' + (20 + coords.y) + '" rx="100" ry="30" />'
  var rtn = {
   innerHTML: ih,
   cds: coords,
  };
 return rtn;
}
