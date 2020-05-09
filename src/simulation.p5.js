import p5 from 'p5';
import Person from './person.p5';
import { canvasWindow } from './canvaswindow.p5';
import matter from 'matter-js';

const sketch = (s) => {
    let p;
    let p1;
    let engine;
    s.setup = () => {
        engine = matter.Engine.create();
        engine.world.gravity.scale = 0.000001;
        s.createCanvas(canvasWindow.w, canvasWindow.h);
        s.background(0);
        s.fill(255);

        p = new Person(10, 10, s, engine);
        p1 = new Person(300, 10, s, engine);
    }

    s.draw = () => {
        matter.Engine.run(engine);
        s.background(0);
        p.draw();
        p1.draw();
    }
}
let s = new p5(sketch);
export { s };