
const battlefield = {
  createGameGrid: function() {
    const gameGrid = [];

    for (let i=0; i < 10; i++) {
      gameGrid.push([]);
      for (let j =0; j< 10; j++) {
        gameGrid[i].push(0);
      }
    }
    return gameGrid;
  }
};

console.log(battlefield.createGameGrid());
