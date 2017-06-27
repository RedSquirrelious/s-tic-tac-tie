import Game from 'app/models/game_model';
import Player from 'app/models/player_model';
import Space from 'app/models/space_model';

describe('Game', function() {
  var game;
  var player1;
  var player2;

  beforeEach( function() {
    var testPlayers = [   
      { name: 'Bugs Bunny', mark: 'squirrel-grass.jpg' }, 
      { name:'Yosemite Sam', mark: 'squirrel-snow.jpg' }    
    ];
    player1 = new Player(testPlayers[0]);
    player2 = new Player(testPlayers[1]);
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

  it('should set the right current player', function() {
    expect(game.currentPlayer).toEqual(player1);
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
  })

}); 
