import { canvasWindow } from './canvaswindow.p5';


class Person {
    constructor(x, y, s, v) {
        this.pos = s.createVector(x, y);
        this.vel = v || s.createVector(s.random(5), s.random(5));
        this.s = s;
        this.m = 1;
    }

    setVel(vel) {
        this.vel = vel;
    }

    isCollide(pOther) {
        const _x = pOther.pos.x - this.pos.x;
        const _y = pOther.pos.y - this.pos.y;
        const d = this.s.sqrt(this.s.pow(_x, 2) + this.s.pow(_y, 2));
        return d < 20;
    }

    update() {
        this.pos.add(this.vel);
    }

    draw() {
        if (this.pos.y + 10 > canvasWindow.h) {
            this.vel.y *= -1;    
        }
        if (this.pos.x + 10 > canvasWindow.w) {
            this.vel.x *= -1;
        }
        if (this.pos.y - 10 < 0) {
            this.vel.y *= -1;
        }

        if (this.pos.x - 10 < 0) {
            this.vel.x *= -1;
        }

        this.s.fill(255);
        this.s.circle(this.pos.x, this.pos.y, 20);
    }
}
export default Person;