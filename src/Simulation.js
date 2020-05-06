import React from 'react';
import { s as simulation } from './simulation.p5';

const Simulation = () => {
    const sim = React.useRef(simulation);
    return (<div ref={sim}></div>)
}
export default Simulation;