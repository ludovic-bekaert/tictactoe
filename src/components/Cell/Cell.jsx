import React from 'react';

const Cell = ({
  onClick,
  value
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        border: '1px black solid',
        height: 50,
        width: 50,
        backgroundColor: value,
        boxSizing: 'border-box'
      }}
    >

    </div>
  )
}

export default Cell;