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
    mark: "images/squirrel-grass.jpg"   
  }, {
    name: "Elmer Fudd",
    mark: "images/squirrel-rocks.jpg"
  }, {
    name:"Yosemite Sam",
    mark: "images/squirrel-snow.jpg"   
  }    
];

$(document).ready(function() {

  var game = new Game();
  var board = new GameView(   
    {   
      el: $('#game'),
      model: Game,   
      template: _.template($('#board-template').html()),
      currentGame: game 
    }   
  );

  var player1 = new Player();
  player1.setName(player1.names.elmer);
  player1.setMark(player1.markImages.elmer);


  var player2 = new Player();
  player2.setName(player2.names.roadrunner);
  player2.setMark(player2.markImages.roadrunner);


  game.addPlayers(player1, player2);
  game.setCurrentPlayer(player1);
   
  var p1 = new PlayerView({
    el: $('#player-list'),
    model: Player,
    template: _.template($('#player-list-template').html()),
    player1: player1,
    player2: player2   
  });
   
  board.render();   
  p1.render();   
});    
