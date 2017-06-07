import Player from 'app/models/player_model';

describe("Player", function() {
var player;

beforeEach(function() {
  var specs = {name: 'Sebastian', mark: 'X'};
  player = new Player(specs);
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

})