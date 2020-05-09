import matter from 'matter-js';

class Wall {
    constructor(x, y, w, h, s, world) {
        this.body = matter.Bodies.rectangle(x + w/2, y + h/2, w, h);
        this.body.isStatic = true;
        this.body.restitution = 0;
        matter.World.add(world, this.body);
        this.s = s;
    }

    draw() {
        const body = this.body;
        const pos = body.position;
        const w = body.bounds.max.x - body.bounds.min.x;
        const h = body.bounds.max.y - body.bounds.min.y;
        this.s.rect(pos.x - w/2, pos.y - h/2, w, h);
    }
}

export default Wall;