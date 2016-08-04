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



window.findNRooksSolution = function(n) {
  var a = new Board({n: n});
  var board = a.rows();
  var solution = undefined; //fixme
  var inner = function(row) {
    if (board[row] === undefined) {
      return board;
    }
    for (var i = 0; i < board[row].length; i++) {
      // console.log('board');
      a.togglePiece(row, i);
      if (a.hasAnyRooksConflicts()) {
        a.togglePiece(row, i);
      } else {
        return inner(row + 1);
      }
    }
  };
  solution = inner(0);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  // var a = new Board({n: n});
  // var board = a.rows();
  // var solution = 0; //fixme
  // var inner = function(row) {
  //   if (board[row] === undefined) {
  //     solution++;
  //     return false;
  //   }
  //   for (var i = 0; i < board[row].length; i++) {

  //     a.togglePiece(row, i);
  //     if (a.hasAnyRooksConflicts()) {
  //       a.togglePiece(row, i);
  //     } else {
  //       var nextRow = inner(row + 1);
  //       if (nextRow !== false) {
  //         return nextRow;
  //       }
  //       a.togglePiece(row, i);
  //     }

  //   }

  //   return false;
  // };

  // inner(0);

  // console.log('Single solution for ' + n + ' rook:', JSON.stringify(solution));
  // return solution;
  var res = 1;
  for (var i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var a = new Board({n: n});
  var board = a.rows();
  var solution = undefined; //fixme
  var inner = function(row) {
    if (board[row] === undefined) {
      return board;
    }
    for (var i = 0; i < board[row].length; i++) {
      // console.log('board');
      a.togglePiece(row, i);
      if (a.hasAnyQueensConflicts()) {
        a.togglePiece(row, i);
      } else {
        var nextRow = inner(row + 1);
        if (nextRow !== false) {
          return nextRow;
        }
        a.togglePiece(row, i);
      }
      // a.togglePiece(row, i);
    }

    return false;
  };
  solution = inner(0);
  if (solution === false) {
    solution = a.rows();
  }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var a = new Board({n: n});
  var board = a.rows();
  var solution = 0; //fixme
  var inner = function(row) {
    if (board[row] === undefined) {
      solution++;
      return false;
    }
    for (var i = 0; i < board[row].length; i++) {
      // console.log('board');
      a.togglePiece(row, i);
      if (a.hasAnyQueensConflicts()) {
        a.togglePiece(row, i);
      } else {
        var nextRow = inner(row + 1);
        if (nextRow !== false) {
          return nextRow;
        }
        a.togglePiece(row, i);
      }
      // a.togglePiece(row, i);
    }

    return false;
  };
  // solution = inner(0);
  inner(0);
  // if (solution === false) {
  //   solution = a.rows();
  // }
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

window.NEWcountNQueensSolutions = z => {
  f = 1 << z, g = (N, q, u, ee, n, s) => {
    z - ee || d++;
    n = N | q | u;
    for (s = 1; f - s; s*=2)
      n&s || g(N|s, (q|s)>>1, (u|s)*2^f, ee+1)
  };
  g(d=0, 0, 0, 0);
  return d
}

Q=z=>{f=1<<z,g=(N,q,u,ee,n,s)=>{z-ee||d++;n=N|q|u;for(s=1;f-s;s*=2)n&s||g(N|s,(q|s)>>1,(u|s)*2^f,ee+1)};g(d=0,0,0,0);return d}
