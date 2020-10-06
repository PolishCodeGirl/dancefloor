export default function setUpCanvas() {
  console.log("Loaded");
  var canvas = document.getElementById("dancefloor");
  var ctx = canvas.getContext("2d");
  ctx.translate(0, 0);

  // Set display size (vw/vh).
  var sizeWidth = (80 * window.innerWidth) / 100;
  var sizeHeight = (80 * window.innerHeight) / 100;

  //Setting the canvas site and width to be responsive
  canvas.width = sizeWidth;
  canvas.height = sizeHeight;
  canvas.style.width = sizeWidth;
  canvas.style.height = sizeHeight;
}
