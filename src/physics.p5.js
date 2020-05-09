
class Physics {
    constructor(s) {
        this.s = s;
    }

    collide(m1, m2, v1, v2) {
        const _v1 = v1.copy();
        const _v2 = v2.copy();

        const M = m1 + m2;

        const numerator = _v1.mult(2 * m1).add(_v2).mult(m2).sub(_v2).mult(m1);
        const v2_prime = this.s.createVector(numerator.x / M, numerator.y / M);
        const v1_prime = _v2.add(v2_prime).sub(_v1);
        return {
            v2_prime, v1_prime
        }
    }
}

export default Physics;