import $ from 'jquery';    
import Backbone from 'backbone';    
import _ from 'underscore';   
import Game from 'app/models/game_model';
import Space from 'app/models/space_model';    
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';   
import GameView from 'app/views/game_view';    
import PlayerView from 'app/views/player_view';   

var testPlayers = [   
  {
    name: "Bugs Bunny",
    mark: "squirrel-grass.jpg"   
  }, {
  //   name: "Elmer Fudd",
  //   mark: "squirrel-rocks.jpg"
  // }, {
    name:"Yosemite Sam",
    mark: "squirrel-snow.jpg"   
  }    
];

$(document).ready(function() {
  var player1 = new Player();
  player1.setName(testPlayers[0].name);
  player1.setMark(testPlayers[0].mark);

  console.log(`Player1 mark: ${player1.mark}`)
  var player2 = new Player();
  player2.setName(testPlayers[1].name);
  player2.setMark(testPlayers[1].mark);
console.log(`Player2 mark: ${player2.mark}`)
  var game = new Game();
  

  var rowTest = game.board.grid[0];
  


  var gameview = new GameView(   
    {   
      model: Game,   
      template: _.template($('#board-template').html()),   
      el: $('#game'),
    }   
  );
   
  var p1 = new PlayerView({
    el: $('#player-list'),
    model: player1,
    template: _.template($('#player-list-template').html()),
    player: player1   
  });
   
  var p2 = new PlayerView({
    el: $('#player-list'),
    model: Player,
    template: _.template($('#player-list-template').html()),
    player: player2   
  });
   
  game.currentPlayer = player1;
  gameview.render();   
  p1.render();   
});    
