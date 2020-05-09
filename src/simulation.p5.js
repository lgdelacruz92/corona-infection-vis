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
    s.setup = () => {
        engine = matter.Engine.create();
        world = engine.world;
        s.createCanvas(canvasWindow.w, canvasWindow.h);
        s.background(0);
        s.fill(255);

        p = new Person(10, 10, s, world);
        ground = new Wall(0, canvasWindow.h - 20, canvasWindow.w, 20, s, world);
    }

    s.draw = () => {
        matter.Engine.update(engine);
        s.background(0);
        p.draw();
        ground.draw();
    }
}
let s = new p5(sketch);
export { s };