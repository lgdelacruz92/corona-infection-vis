import p5 from 'p5';

const sketch = (s) => {
    s.setup = () => {
        s.createCanvas(400, 400);
        s.background(0);
        s.fill(255);
        s.circle(200, 200, 100);
    }
}
let s = new p5(sketch);
export { s };