import rgbColors from "./rgbColors";

export default function drawCanvas(rows, columns) {
  var canvas = document.getElementById("dancefloor");

  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    const width = 800 / columns;
    const height = 800 / rows;

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < columns; j++) {
        ctx.fillStyle = rgbColors();
        ctx.fillRect(j * width, i * height, width, height);
      }
    }
  }
}
