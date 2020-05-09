import p5 from 'p5';
import Person from './person.p5';
import { canvasWindow } from './canvaswindow.p5';
import matter from 'matter-js';
import Wall from './walls.p5';

const sketch = (s) => {
    let p;
    let engine;
    let ground;
    let world;
    let leftWall;
    let rightWall;
    let topWall;
    let people = [];

    s.setup = () => {
        engine = matter.Engine.create();
        world = engine.world;
        world.gravity.y = 0;

        s.createCanvas(canvasWindow.w, canvasWindow.h);
        s.background(0);
        s.fill(255);

        p = new Person(10, 10, s, world);
        ground = new Wall(0, canvasWindow.h, canvasWindow.w, 5, s, world);
        leftWall = new Wall(-5, 0, 5, canvasWindow.h, s, world);
        rightWall = new Wall(canvasWindow.w, 0, 5, canvasWindow.h, s, world);
        topWall = new Wall(0, -5, canvasWindow.w, 5, s, world);

        for (let i = 0; i < 100; i++) {
            people.push(new Person(s.random(canvasWindow.w - 10), s.random(canvasWindow.h - 10), s, world));
        }
    }

    s.draw = () => {
        matter.Engine.update(engine);
        s.background(0);
        p.draw();
        ground.draw();
        leftWall.draw();
        rightWall.draw();
        topWall.draw();

        people.forEach(person => {
            person.draw();
        })
    }
}
let s = new p5(sketch);
export { s };