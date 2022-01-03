// creo variabili degli angoli
b = 45;
c = 0;
d = 0;
e = 0;
p = 60;

function setup() {
  //genero canvas con 3D
  createCanvas(windowWidth, windowHeight, WEBGL);
  frameRate(30);
  background("#F7C35C");
  //imposto gradi come modalità
  angleMode(DEGREES);
}

function draw() {
  fill("#FCF6B1");
  //creo la variabile z che oscilla, per farlo prendo il seno del frame count e lo moltiplico a seconda dell'ampiezza del moto che voglio ottenere
  z = sin(frameCount * 2) * 150;
  translate(0, 0, -50);

  push();
  rotate(b);
  noStroke();
  fill("#2F4858");
  b = b + 60;
  rect(0, 0, 50, 50);
  pop();

  push();
  rotate(b * 2);
  stroke("#FCF6B1");
  fill("#20BF55");
  ellipse(25, 0, 50);
  pop();
  // creo tre circonferenze che hanno rotazioni differenti
  //il diametro delle circonferenze varia del valore z
  push();
  strokeWeight(2);
  //rotazione intorno all'asse x determinata da z
  rotateX(z);
  rotate(c);
  c = c + 5;
  stroke("#FCF6B1");
  fill("#523157");
  ellipse(450, 100, z);
  pop();

  push();
  // translate(0, 0, z / 2);
  strokeWeight(2);
  //non ruota attorno ad asse z
  rotateX(70);
  rotate(d);
  d = d + 10;
  stroke("#FCF6B1");

  fill("#F72C25");
  ellipse(250, 100, z);
  pop();

  push();
  strokeWeight(2);
  rotateX(z * -1);
  rotate(e);
  e = e + 10;
  stroke("#FCF6B1");

  fill("#3F6634 ");
  ellipse(350, 100, -z);
  pop();
}
