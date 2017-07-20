import Game from 'app/models/game_model';
import Player from 'app/models/player_model';
import Space from 'app/models/space_model';

describe('Game', function() {
  var game;
  var player1;
  var player2;
  var curr;
  var currMark;

  beforeEach( function() {
    var testPlayers = [   
      { name: 'Bugs Bunny', mark: 'squirrel-grass.jpg' }, 
      { name:'Yosemite Sam', mark: 'squirrel-snow.jpg' }    
    ];
    player1 = new Player();
    player1.setName(testPlayers[0].name);
    player1.setMark(testPlayers[0].mark);
    player2 = new Player();
    player2.setName(testPlayers[1].name);
    player2.setMark(testPlayers[1].mark);
    game = new Game();
    game.addPlayers(player1, player2);
    game.setCurrentPlayer(player1);
  });

  it('a new game should be defined', function() {
    expect(game).toBeDefined();
  })

  it('should accept players', function() {
    expect(game.player1).toBeDefined();
  });

  it('should set the current player', function() {
    expect(game.currentPlayer).toBeDefined();
  });

  it('should set a Player as the current player', function() {
    expect(game.currentPlayer instanceof Player).toEqual(true);
  })

  it('should set the right current player', function() {
    expect(game.currentPlayer).toEqual(player1);
  });

  it('should report a new current player', function() {
    expect(game.currentPlayer).not.toEqual(player2);
    expect(game.currentPlayer).toEqual(player1);
    game.setCurrentPlayer(player2);
    expect(game.currentPlayer).not.toEqual(player1);
    expect(game.currentPlayer).toEqual(player2);
  });


  it('should not set the wrong current player', function() {
    expect(game.currentPlayer).not.toEqual(player2);
  });

  it('should make a new board', function() {
    expect(game.board).toBeDefined();
  });

  it('should have a board with 3 rows', function() {
    expect(game.board.grid.length).toEqual(3);
  });

  it('should have a board with 3 columns', function() {
    expect(game.board.grid[0].length).toEqual(3);
    expect(game.board.grid[1].length).toEqual(3);
    expect(game.board.grid[2].length).toEqual(3);
  });

  it('should report on win status', function() {
    expect(game.returnWinStatus()).toEqual('in progress');
  });

  it('should not report an in-progress game as won', function() {
    expect(game.returnWinStatus()).not.toEqual('won');
  });

  it('should show the current players mark', function() {
    expect(game.currentPlayer.mark).toEqual(player1.mark);
    expect(player1.mark).toEqual('squirrel-grass.jpg');
  });

  it('should swap out currentPlayer', function() {
    curr = game.currentPlayer;
    game.takeTurns(0,0);
    expect(game.currentPlayer).not.toEqual(curr);
  });

  it('should show that the new currentPlayers mark is different than the previous currentPlayer', function() {
    currMark = game.currentPlayer.mark;
    expect(currMark).toEqual('squirrel-grass.jpg');
    game.takeTurns(0,0);
    expect(game.currentPlayer.mark).not.toEqual(currMark);
    expect(game.currentPlayer.mark).toEqual('squirrel-snow.jpg');
  });

  it('should show the currentPlayers mark in the spot chosen', function() {
    currMark = game.currentPlayer.mark;
    expect(currMark).toEqual('squirrel-grass.jpg');
    game.takeTurns(0,0);
    expect(game.board.grid[0][0].get('mark')).toEqual(currMark);
    expect(game.board.grid[0][0].get('mark')).not.toEqual('squirrel-snow.jpg');
  });

  it('should return 0 playCounter for new game', function() {
    expect(game.get('playCounter')).toEqual(0);
  });

  it('should up the playCounter when someone takes a turn', function() {
    game.takeTurns(0,0, true);
    expect(game.get('playCounter')).toEqual(1);
  });

  it('should up the playCounter when someone takes a turn', function() {
    game.takeTurns(0,0, true);
    game.takeTurns(0,1);
    expect(game.get('playCounter')).toEqual(2);
  });

  it('should up the playCounter when someone takes a turn', function() {
    game.takeTurns(0,0, true);
    game.takeTurns(0,1);
    game.takeTurns(1,0);
    expect(game.get('playCounter')).toEqual(3);
  });

  it('should return in-progress status when playCounter < 5', function() {
    expect(game.checkWinStatus(0,0)).toEqual('in progress');
  });

  it('should return in-progress status when playCounter < 5 and no match', function() {
      game.takeTurns(0,0);
      game.takeTurns(1,1);
      game.takeTurns(0,1);
      game.takeTurns(1,1);
      game.takeTurns(0,2);
      // game.takeTurns(1,0);
    expect(game.checkWinStatus(0,0)).toEqual('in progress');
    expect(game.checkWinStatus(0,0)).not.toEqual(`${player1.name} won!`);
  });

  xit('should return a message with winners name status when appropriate and playCounter < 5', function() {
      game.takeTurns(0,0);
      game.takeTurns(1,1);
      game.takeTurns(0,1);
      game.takeTurns(1,1);
      game.takeTurns(0,2);
      game.takeTurns(1,0);
    expect(game.checkWinStatus(0,0)).toEqual(`${game.currentPlayer.name} won!`);
  });

  xit('should return a message with winners name status when appropriate and playCounter < 5', function() {
      game.takeTurns(0,0); //player1
      game.takeTurns(1,1);
      game.takeTurns(0,1); //player1
      game.takeTurns(0,2);
      game.takeTurns(2,2); //player1
      game.takeTurns(1,0);
      game.takeTurns(1,2); //player1
      game.takeTurns(1, 2);
    expect(game.checkWinStatus(1,1)).not.toEqual('in progress');
    expect(game.checkWinStatus(1,1)).toEqual(`${game.currentPlayer.name} won!`);
    expect(game.checkWinStatus(1, 1)).toEqual(`${game.player2.name} won!`);
    expect(game.checkWinStatus(0,0)).not.toEqual(`${game.player1.name} won!`);
  });

}); 
