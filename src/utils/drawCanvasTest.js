export default function drawCanvasTest() {
  var canvas = document.getElementById("dancefloor");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(0, 109, 119)";
    ctx.fillRect(0, 0, 100, 100);

    ctx.fillStyle = "rgb(131, 197, 190)";
    ctx.fillRect(100, 0, 100, 100);

    ctx.fillStyle = "rgb(237, 246, 249)";
    ctx.fillRect(200, 0, 100, 100);

    ctx.fillStyle = "rgb(255, 221, 210)";
    ctx.fillRect(0, 100, 100, 100);

    ctx.fillStyle = "rgb(226, 149, 120)";
    ctx.fillRect(100, 100, 100, 100);

    ctx.fillStyle = "rgb(51, 65, 92)";
    ctx.fillRect(200, 100, 100, 100);

    ctx.fillStyle = "rgb(0, 109, 119)";
    ctx.fillRect(0, 200, 100, 100);

    ctx.fillStyle = "rgb(131, 197, 190)";
    ctx.fillRect(100, 200, 100, 100);

    ctx.fillStyle = "rgb(237, 246, 249)";
    ctx.fillRect(200, 200, 100, 100);
  }
}
