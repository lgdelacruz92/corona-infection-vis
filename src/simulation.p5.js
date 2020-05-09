import p5 from 'p5';
import Person from './person.p5';
import { canvasWindow } from './canvaswindow.p5';
import Physics from './physics.p5';

const sketch = (s) => {
    let p;
    let p1;
    let physics;
    s.setup = () => {
        s.createCanvas(canvasWindow.w, canvasWindow.h);
        s.background(0);
        s.fill(255);
        physics = new Physics(s);
        p = new Person(10, 10, s);
        p1 = new Person(300, 10, s);
    }

    s.draw = () => {
        s.background(0);
        p.draw();
        p1.draw();

        if (p.isCollide(p1)) {
            const vels = physics.collide(1, 1, p.vel, p1.vel);
            p.setVel(vels.v1_prime);
            p1.setVel(vels.v2_prime);
        }

        p.update(p1);
        p1.update(p);
    }
}
let s = new p5(sketch);
export { s };