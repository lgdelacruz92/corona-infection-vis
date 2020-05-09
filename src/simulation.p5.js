import p5 from 'p5';
import Person from './person.p5';
import { canvasWindow } from './canvaswindow.p5';
import matter from 'matter-js';
import Wall from './walls.p5';

const sketch = (s) => {
    let engine;
    let ground;
    let world;
    let leftWall;
    let rightWall;
    let topWall;
    let people = [];

    const bodyDic = {};

    s.setup = () => {
        engine = matter.Engine.create();
        world = engine.world;
        world.gravity.y = 0;

        s.createCanvas(canvasWindow.w, canvasWindow.h);
        s.background(0);
        s.fill(255);

        ground = new Wall(0, canvasWindow.h, canvasWindow.w, 5, s, world);
        leftWall = new Wall(-5, 0, 5, canvasWindow.h, s, world);
        rightWall = new Wall(canvasWindow.w, 0, 5, canvasWindow.h, s, world);
        topWall = new Wall(0, -5, canvasWindow.w, 5, s, world);

        for (let i = 0; i < 50; i++) {
            people.push(new Person(s.random(canvasWindow.w - 10), s.random(canvasWindow.h - 10), s, world));
        }

        people.forEach(person => {
            bodyDic[person.body.id] = person;
        });
        
        people[0].infected = true;
        onCollision();
    }

    s.draw = () => {
        matter.Engine.update(engine);
        s.background(255);
        ground.draw();
        leftWall.draw();
        rightWall.draw();
        topWall.draw();

        people.forEach(person => {
            person.draw();
        })
    }

    const onCollision = () => {
        matter.Events.on(engine, 'collisionStart', function(event) {
            event.pairs.forEach(pair => {
                const person1 = bodyDic[pair.bodyA.id];
                const person2 = bodyDic[pair.bodyB.id];
                
                if (person1 && person2) {
                    if (person1.infected) {
                        const r = s.random();
                        if (r > 0.5) {
                            person2.infected = true;
                        }
                    }

                    if (person2.infected) {
                        const r = s.random();
                        if (r > 0.5) {
                            person1.infected = true;
                        }
                    }
                }
            });
        });
    }
}
let s = new p5(sketch);
export { s };