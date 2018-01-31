/**
 * @param {string} moves
 * @return {boolean}
 */
const judgeCircle = function(moves) {
  // edge cases
  if(!moves || moves.length < 2) { return "Invalid Input"; }
  
  let currPos = { x: 0, y: 0 };

  moves.split("").forEach(move => {
      currPos = getNewPosition(currPos, move);
  });
  
  return currPos.y === 0 && currPos.x === 0 ? true : false;
};

const getNewPosition = (position, move) => {
switch (move) {
      case "U":
        position.y++;
        break;
      case "D":
        position.y--;
        break;
      case "R":
        position.x++;
        break;
      case "L":
        position.x--;
        break;
}
  
  return position;
};
