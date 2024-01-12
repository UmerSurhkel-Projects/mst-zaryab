import React from 'react';

const Snake = ({ snakeDots }) => {
  return (
    <div className='snake-container'>
      {snakeDots.map((dot, index) => (
        <div 
          key={index} 
          className='snake-dot'
          style={{ 
            left: `${dot.x * 20}px`, 
            top: `${dot.y * 20}px`,
            width: '20px',  // Ensure consistent size for each dot
            height: '20px',
            position: 'absolute'  // Ensure dots are positioned absolutely within the container
          }}
        >
          {index === 0 && (
            <>
              <div className='snake-eye snake-eye-left' />
              <div className='snake-eye snake-eye-right' />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Snake;
