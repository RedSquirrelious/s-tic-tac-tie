import Player from 'app/models/player_model';
import Space from 'app/models/space_model';
import Game from 'app/models/game_model';

describe("Player", function() {
var player;
var test;
var game;
var space;

beforeEach(function() {
  var specs = {name: 'Sebastian', mark: 'X'};
  player = new Player();
  player.setName(specs.name);
  player.setMark(specs.mark);

  game = new Game();

  space = game.board.grid[0][0];
  player.playSpace(space);
});

it('should create a player', function() {
  expect(player).toBeDefined();
});

it('should have the right name', function() {
  expect(player.name).toEqual('Sebastian');
});

it('should not have the wrong name', function() {
  expect(player.name).not.toEqual('Steve');
});

it('should have the right mark', function() {
  expect(player.mark).toEqual('X');
});

it('should not have the wrong mark', function() {
  expect(player.mark).not.toEqual('O');
});

it('should be able to play a space on the board', function() {
  expect(space.mark).toEqual(player.mark);
});

it('should be able to play the right space on the board', function() {
  expect(space.mark).toEqual('X');
  expect(space.mark).not.toEqual('O');
});

})