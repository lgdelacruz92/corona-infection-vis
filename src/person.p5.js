import matter from 'matter-js';

class Person {
    constructor(x, y, s, world) {
        this.body = matter.Bodies.circle(x, y, 10);
        matter.World.add(world, this.body);
        this.s = s;
    }

    draw() {
        const pos = this.body.position;
        this.s.fill(255);
        this.s.circle(pos.x, pos.y, 20);
    }
}
export default Person;