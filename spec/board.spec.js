// import Board from 'app/models/board_model';
// import Space from 'app/models/space_model';
// describe('Board', function() {
//   var board;
//   var grid;
//   var otherBoard;
//   var row;
//   var test;

//   beforeEach(function() {
//     board = new Board();
//     grid = board.grid;
//   });

//   it('should allow itself to be created', function() {
//     expect(board).toBeDefined();
//   });

//   it('should have a grid', function() {
//     expect(board.grid).toBeDefined();
//   });

//   it('should know it has 3 rows', function() {
//     expect(board.grid.length).toEqual(3);
//   });

//   it('should not say it has other than 3 rows', function() {
//     expect(board.grid.length).not.toEqual(7);
//   })

//   it('should know it has 3 columns in each row', function() {
//     expect(grid[0].length).toEqual(3);
//     expect(grid[1].length).toEqual(3);
//     expect(grid[2].length).toEqual(3);        
//   });

//   it('should have spaces in its grid',function() {
//     expect(grid[0][0] instanceof Space).toEqual(true);
//   });

//   it('should have separate instances of Spaces', function() {
//     grid[0][0].setMark('x');
//     expect(grid[0][0].get('mark')).not.toEqual(grid[2][2].get('mark'));
//   });

//   it('should allow you to set a mark in one of its spaces', function() {
//     grid[0][0].setMark('o');
//     grid[2][2].setMark('x');
//     expect(grid[0][0].get('mark')).toEqual('o');
//     expect(grid[2][2].get('mark')).toEqual('x');
//   });

//   it('should return the contents of a row', function() {
//     grid[0][0].setMark('x');
//     grid[0][1].setMark('o');
//     grid[0][2].setMark('x');
//     expect(board.returnRow(0)).toEqual(['x', 'o', 'x']);
//   });

//   it('should return the contents of a column', function() {
//     grid[0][0].setMark('o');
//     grid[1][0].setMark('x');
//     grid[2][0].setMark('o');
//     expect(board.returnCol(0)).toEqual(['o', 'x', 'o']);
//   });

//   it('should return the contents of the left diagonal', function() {
//     grid[2][0].setMark('x');
//     grid[1][1].setMark('o');
//     grid[0][2].setMark('x');
//     expect(board.returnRightDiagonal()).toEqual(['x', 'o', 'x']);
//   });

//   it('should return the contents of the right diagonal', function() {
//     grid[0][0].setMark('o');
//     grid[1][1].setMark('x');
//     grid[2][2].setMark('o');
//     expect(board.returnLeftDiagonal()).toEqual(['o', 'x', 'o']);
//   });

//   it('should show a new board has null columns', function() {
//     expect(board.returnCol(0)).toEqual([null, null, null]);
//     expect(board.returnCol(1)).toEqual([null, null, null]);
//     expect(board.returnCol(2)).toEqual([null, null, null]);
//   });


//   it('should report if an empty row is really empty', function() {
//     expect(board.reportMatch(0, 'row', null)).toEqual(true);
//   });

//   it('should report if a row with one item is not all nulls (empty)', function() {
//     board.grid[0][0].setMark('x');
//     expect(board.reportMatch(0, 'row', null)).toEqual(false);
//   });

//  it('should report if a row of Xs are all Xs', function() {
//     board.grid[0][0].setMark('x');
//     board.grid[0][1].setMark('x');
//     board.grid[0][2].setMark('x');
//     expect(board.reportMatch(0, 'row', 'x')).toEqual(true);
//   });  

//  it('should report NO if a row with 2 Xs and 1 O are all Xs', function() {
//     board.grid[0][0].setMark('x');
//     board.grid[0][1].setMark('o');
//     board.grid[0][2].setMark('x');
//     expect(board.reportMatch(0, 'row', 'x')).toEqual(false);
//   });  

//  it('should report if an empty column is really empty', function() {
//     expect(board.reportMatch(0, 'col', null)).toEqual(true);
//   });

//   it('should report if a column with one item is not all nulls (empty)', function() {
//     board.grid[0][0].setMark('x');
//     expect(board.reportMatch(0, 'col', null)).toEqual(false);
//   });

//  it('should report if a column of Xs are all Xs', function() {
//     grid[0][0].setMark('x');
//     grid[1][0].setMark('x');
//     grid[2][0].setMark('x');
//     expect(board.reportMatch(0, 'col', 'x')).toEqual(true);
//   });  

//  it('should report NO if a column with 2 Xs and 1 O are all Xs', function() {
//     grid[0][0].setMark('o');
//     grid[1][0].setMark('x');
//     grid[2][0].setMark('o');
//     expect(board.reportMatch(0, 'col', 'x')).toEqual(false);
//   });  

//   it('should report if an empty left diagonal is really empty', function() {
//     expect(board.reportMatch(0, 'leftDiagonal', null)).toEqual(true);
//   });

//    it('should report if a left diagonal with one item is not all nulls (empty)', function() {
//     board.grid[0][0].setMark('x');
//     expect(board.reportMatch(0, 'leftDiagonal', null)).toEqual(false);
//   });

//    it('should report if a left diagonal with Xs are all Xs', function() {
//     grid[0][0].setMark('x');
//     grid[1][1].setMark('x');
//     grid[2][2].setMark('x');
//     expect(board.reportMatch(0, 'leftDiagonal', 'x')).toEqual(true);
//   }); 

//   it('should report NO if a left diagonal with 2 Xs and 1 O are all Xs', function() {
//     grid[0][0].setMark('o');
//     grid[1][1].setMark('x');
//     grid[2][2].setMark('o');
//     expect(board.reportMatch(0, 'leftDiagonal', 'x')).toEqual(false);
//   }); 

//     it('should report if an empty right diagonal is really empty', function() {
//     expect(board.reportMatch(0, 'rightDiagonal', null)).toEqual(true);
//   });

//    it('should report if a right diagonal with one item is not all nulls (empty)', function() {
//     board.grid[0][2].setMark('x');
//     expect(board.reportMatch(0, 'rightDiagonal', null)).toEqual(false);
//   });

//    it('should report if a right diagonal with Xs are all Xs', function() {
//     grid[0][2].setMark('x');
//     grid[1][1].setMark('x');
//     grid[2][0].setMark('x');
//     expect(board.reportMatch(0, 'rightDiagonal', 'x')).toEqual(true);
//   }); 

//   it('should report NO if a right diagonal with 2 Xs and 1 O are all Xs', function() {
//     grid[0][2].setMark('o');
//     grid[1][1].setMark('x');
//     grid[2][0].setMark('o');
//     expect(board.reportMatch(0, 'rightDiagonal', 'x')).toEqual(false);
//   }); 

// });