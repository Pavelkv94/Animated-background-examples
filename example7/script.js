$(function () {
  var lines = document.getElementById('lines');
  lines.width = $('#lines').width();
  lines.height = $('#lines').height();
});

$(function () {
  var e,
    t,
    n,
    r,
    i = [],
    s,
    o,
    u = 10;
  n = $('#lines')[0];
  r = n.getContext('2d');
  s = $('#lines').width();
  o = $('#lines').height();
  r.strokeStyle = '#9DBCE1';
  r.lineWidth = 0.1;
  for (e = 0; e < 4 * u; e += 1) {
    i.push({
      x: Math.random() * s,
      y: Math.random() * o,
      vx: Math.random() * 4 - 2,
      vy: Math.random() * 4 - 2
    });
  }
  var a = 0;
  setInterval(function () {
    if (a <= 3e4) {
      for (t = 0; t < u; t += 1) {
        r.beginPath();
        r.moveTo(i[t * 4].x, i[t * 4].y);
        r.bezierCurveTo(
          i[t * 4 + 1].x,
          i[t * 4 + 1].y,
          i[t * 4 + 2].x,
          i[t * 4 + 2].y,
          i[t * 4 + 3].x,
          i[t * 4 + 3].y
        );
        r.stroke();
      }
      for (e = 0; e < i.length; e += 1) {
        i[e].y += i[e].vx;
        i[e].x += i[e].vy;
        a++;
      }
    } else {
      clearInterval(setInterval);
    }
  }, 1e3 / 24);
});
