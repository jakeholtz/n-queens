/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
[
      [1, 0, 0, 0],
      [0, 0, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 0]
    ]


window.findNRooksSolution = function(n) {
  var solution = [];
  //create nXn array board
  var matrix = Array(4).fill(0).map(() => Array(4).fill(0));
  var board = new Board(matrix);
  var rooksPlaced = 0;

  // no col or row conflicts place the current rook at row (0) and col (0)
  // else move one row to right and 
console.log(board);
  for (var row = 0; row < board.length; row++) {
    for (var col = 0; col < board.length; col++) {
        if(!board.hasRowConflictAt(row) && !board.hasColConflictAt(col)) {
          board[row][col] = 1;
          rooksPlaced++;
        }
        if (rooksPlaced === n) {
          console.log(board);
          throw board;
        }
    }
  }
    
    //place # of rooks on board
      //place first rook
      // place n number left of rooks
        // check if rook placed has any conflicts
        // if no conflicts go with placement
      // repeat until n number is done
      // return the first successful board
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board));
  return board;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
