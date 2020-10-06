export default function clearCanvas() {
  var canvas = document.getElementById("dancefloor");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 1000, 1000);
  }
}
