import React, { useMemo, useState } from 'react';
import Cell from '../Cell';

function checkWinner (grid) {
  const lines = [
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6]
  ];

  return lines.map(l => {
    const result = grid[l[0]] !== null && grid[l[0]] === grid[l[1]] && grid[l[0]] === grid[l[2]];
    if (result) {
      console.log(l);
    }
    return result ? grid[l[0]] : null;
  }).find((v) => v);
};


// 2 * (n + 5)
// 4 * (n + 7)

// 2 * (n + 9)
// 2 * 4 + 2 * 4 

// 1*1 = 
// 2*2 = 6
// 3*3 = 20 | 8
// 4*4 = 42 | 24 | 10
// 5*5 =      40 | 28 | 12
// 6*6 =         |    | 32 | 14
const Game = () => {
  const size = 5;
  const defaultGrid = Array(size * size).fill(null);

  const [player, setPlayer] = useState('red');
  const [grid, setGrid] = useState(defaultGrid);
  
  const winner = useMemo(() => {
    console.log(grid);
    return checkWinner(grid);
  }, [player, grid]);

  function handleChangeClick(id) {
    if (!winner && !grid[id]) {
      setGrid(grid => {
        const tmp = grid;
        tmp[id] = player;
        return tmp;
      });
      setPlayer(player => player === 'red' ? 'blue': 'red');
    }
  }

  function handleReset() {
    setGrid(defaultGrid);
  }

  return ( <div>
    <div style={{
      display: 'flex',
      width: size * 50,
      flexWrap: 'wrap'
    }}>
    { grid.map((cell, i) => <Cell key={i} value={cell} onClick={() => handleChangeClick(i)} />)}
    </div>
    <h1>Winner: {winner} </h1>
    { winner && <button onClick={handleReset}>Reset</button>}
  </div> );
}

export default Game;