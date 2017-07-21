import $ from 'jquery';    
import Backbone from 'backbone';    
import _ from 'underscore';   
import Game from 'app/models/game_model';
import Space from 'app/models/space_model';    
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';   
import GameView from 'app/views/game_view';    
import PlayerView from 'app/views/player_view';   
import ChoiceList from 'app/models/choice_list_model';
import ChoiceListView from 'app/views/choice_list_view';    


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

  var choiceList = new ChoiceList();
  var choiceView = new ChoiceListView({
    el: $('#choices'),
    model: ChoiceList,
    template: _.template($('#choice-list-template').html()),
    choiceList: choiceList
  });

  var game = new Game();
  var gameview = new GameView(   
    {   
      el: $('#game'),
      model: Game,   
      template: _.template($('#board-template').html()),
      currentGame: game 
    }   
  );

  var player1 = new Player();
  player1.setName(testPlayers[0].name);
  player1.setMark(gameview.markImages.bugs);


  var player2 = new Player();
  player2.setName(testPlayers[1].name);
  player2.setMark(gameview.markImages.elmer);


  game.addPlayers(player1, player2);
  game.setCurrentPlayer(player1);
   
  var p1 = new PlayerView({
    el: $('#player-list'),
    model: Player,
    template: _.template($('#player-list-template').html()),
    player1: player1,
    player2: player2   
  });
  choiceView.render(); 
  gameview.render();   
  p1.render();   
});    
