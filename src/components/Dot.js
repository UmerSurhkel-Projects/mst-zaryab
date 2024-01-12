import React from 'react';

const Dot = ({ dot }) => {
    const style = {
        left: `${dot.x * 20}px`,
        top: `${dot.y * 20}px`,
        position: 'absolute',
        width: '20px', // Adjust size as needed
        height: '20px', // Adjust size as needed
        backgroundColor: 'red', // Or any color you prefer
        borderRadius: '50%',
    };

    return <div style={style}></div>;
};

export default Dot;
