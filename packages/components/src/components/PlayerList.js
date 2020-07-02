import React, { useState } from 'react';
import Player from './Player';
import ReactDom from "react-dom";

import { App } from '../App';

let list=['Messi', 'Ronaldo', 'Nancho', 'Kevin'];

const rerender = () => ReactDom.render(<App />, document.getElementById('root'));

const updateName = (index) => {
    list = list.map((item, i) => i === index ? item.split('').reverse().join('') : item);
    rerender();
}

const moveUp = (index) => {
    if (index === 0) { return; }

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (index === i) {
            const pre = list[i - 1];
            list[i - 1] = element;
            list[i] = pre;
        }
    }
    rerender();
}

const moveDown = (index) => {
    if (index === list.length - 1) { return; }

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        if (index === i) {
            const after = list[i + 1];
            list[i + 1] = element;
            list[i] = after;
        }
    }
    rerender();
}

export const PlayerList = () => {
    const [counter, incrementCounter] = useState(0);

    const handleIncrement = (increment) => {
        incrementCounter(counter + increment)
    };
    
    return (
        <table className="table table-sm table-striped">
            <thead>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Length</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    list.map((item, index) => (
                        <tr key={index}>
                            <Player index={index} name={item} 
                                reverseName={ updateName }
                                size={list.length}
                                moveUp={ moveUp }
                                moveDown={ moveDown }
                                couter={ counter }
                                incrementCallback={ handleIncrement } />
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default PlayerList;