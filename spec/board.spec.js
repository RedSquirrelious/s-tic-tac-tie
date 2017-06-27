import Board from 'app/models/board_model';

describe('Board', function() {
  var board;
  var grid;
  var test;

  beforeEach(function() {
    board = new Board();
    test = board.grid;
  });

  it('should allow itself to be created', function() {
    expect(board).toBeDefined();
  });

  it('should have a grid', function() {
    expect(board.grid).toBeDefined();
  });

  it('should know it has 3 rows', function() {
    expect(board.grid.length).toEqual(3);
  });

  it('should know it has 3 columns in each row', function() {
    var test = board.grid;
    expect(test[0].length).toEqual(3);
    expect(test[1].length).toEqual(3);
    expect(test[2].length).toEqual(3);        
  });

  it('should allow you to set a mark in one of its spaces', function() {
    test[0][0].setMark('x');
    expect(test[0][0].mark).toEqual('x');
  });

  it('should return a row', function() {
    test[0][0].setMark('x');
    test[0][1].setMark('o');
    test[0][2].setMark('x');
    expect(board.returnRow(0)).toEqual(['x', 'o', 'x']);
  });

  it('should return a col', function() {
    test[0][0].setMark('o');
    test[1][0].setMark('x');
    test[2][0].setMark('o');
    expect(board.returnCol(0)).toEqual(['o', 'x', 'o']);
  });

});