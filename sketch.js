function setup() {
  var density = displayDensity();
  var sw = screen.width
  var sh = screen.height
  createCanvas(100, 100);
  background(200);
  text(density,50,50)
  text(sw,sh,10,20)
}
