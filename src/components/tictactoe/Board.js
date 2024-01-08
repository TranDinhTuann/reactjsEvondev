import React from 'react';

import Cell from './Cell';
import { calculateWinner } from '../../helper';
const Board = (props) => {
    // Array(9).fill(0) -> [undefined,]
        const cells = [
            null, null, null,
            'x', 'x', 'x',
            null, null, null
        ];
        
        console.log(calculateWinner(cells));
    return (
        <div className='game-board'>
            {props.cells.map((item, index) => (
                <Cell 
                    key={index} 
                    value={item} 
                    onClick={() => props.onClick(index)}>
                </Cell>
            ))}
        </div>
    );
};

export default Board;