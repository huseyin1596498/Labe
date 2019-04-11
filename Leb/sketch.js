let input1, button, button2, greeting, sd;


function setup() {
  // create canvas
  createCanvas(710, 400);

  var size = ["Shelf", "A4"];
  col = color(238,130,238);

  button = createButton(size[1]);
  button.position(0,0);
  button.style('background-color', col);
  button.size(400,200);
  button.mousePressed(greet);

  button2 = createButton('submit');
  button2.position(200,100);

  button2.mousePressed(greet);


  input = createInput();
  input.position(20, 65);




  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function greet() {
  const name = input.value();
  greeting.html('hello ' + name + '!');
  input.value('');

  for (let i = 0; i < 200; i++) {
    push();
    fill(random(255), 255, 255);
    translate(random(width), random(height));
    rotate(random(2 * PI));
    text(name, 0, 0);
    pop();
  }
}