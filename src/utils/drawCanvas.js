import rgbColors from "./rgbColors";

export default function drawCanvas(rows, columns) {
  var canvas = document.getElementById("dancefloor");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        ctx.fillStyle = rgbColors();
        ctx.fillRect(j * 50, i * 50, 50, 50);
      }
    }
  }
}
