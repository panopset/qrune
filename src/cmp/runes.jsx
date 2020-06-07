import React from 'react';

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

export function getElement() {
 return element;
}
