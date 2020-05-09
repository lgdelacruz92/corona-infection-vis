import matter from 'matter-js';

class Person {
    constructor(x, y, s, world) {
        this.body = matter.Bodies.circle(x, y, 10);
        this.body.restitution = 1;
        this.body.frictionAir = 0;
        matter.Body.setVelocity(this.body, {x: s.random(1), y: s.random(1)});
        matter.Body.setAngularVelocity(this.body, 0);
        matter.World.add(world, this.body);
        this.s = s;
    }

    draw() {
        const pos = this.body.position;
        if (this.body.speed < 5) {
            const curVelocity = this.body.velocity;
            matter.Body.setVelocity(this.body, { x: curVelocity.x * 1.3, y: curVelocity.y * 1.3});
            matter.Body.setAngularVelocity(this.body, 0);

        }
        this.s.fill(255);
        this.s.circle(pos.x, pos.y, 20);
    }
}
export default Person;