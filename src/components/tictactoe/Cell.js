import React from 'react';

// const props =  {
//     value: 'X',
//     onClick: () => true
// }

const Cell = ({value, onClick}) => {
    // const student = {
    //     name: 'evondev',
    //     age: 21
    // };
    // const name = student.name;
    // const age = student.age;
    // const {name, age} = student;
    // console.log(props);
    // const {value, onClick} = props;
    // console.log(value, onClick);
    return (
        <div className='game-cell' onClick={onClick}>
            {value}
        </div>
    );
};

export default Cell;