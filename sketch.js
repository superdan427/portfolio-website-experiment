// Click and drag the mouse to view the scene from different angles.

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  describe('A multicolor box on a gray background. The camera angle changes when the user interacts using a mouse, trackpad, or touchscreen.');
}

function draw() {
  background(200);

  // Enable orbiting with the mouse.
  orbitControl();

  // Style the box.
  normalMaterial();

  // Draw the box.
  box(30, 50);
}
