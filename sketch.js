const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

function setup() {
    createCanvas(800, 400);
    engine = Engine.create();
    world = engine.world;

    options = {
        isStatic: true,
    };

    parede1 = Bodies.rectangle(400, 390, 800, 20, options);
    World.add(world, parede1);

    parede2 = Bodies.rectangle(400, 10, 800, 20, options);
    World.add(world, parede2);

    parede3 = Bodies.rectangle(10, 200, 20, 400, options);
    World.add(world, parede3);

    parede4 = Bodies.rectangle(790, 200, 20, 400, options);
    World.add(world, parede4);

    rectMode(CENTER);
    ellipseMode(RADIUS);
}

function draw() {
    background(51);
    fill("orange");
    rect(parede1.position.x, parede1.position.y, 800, 20);
    rect(parede2.position.x, parede2.position.y, 800, 20);
    rect(parede3.position.x, parede3.position.y, 20, 400);
    rect(parede4.position.x, parede4.position.y, 20, 400);
    Engine.update(engine);
}
