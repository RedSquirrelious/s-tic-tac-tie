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

  // var choiceList = new ChoiceList();


  var game = new Game();
  var board = new GameView(   
    {   
      el: $('#game'),
      // model: Game,   
      // template: _.template($('#board-template').html()),
      model: game,
      playerPersonas: game.playerPersonas
    }   
  );

  var choiceView = new ChoiceListView({
    el: $('#choices'),
    model: game.playerPersonas,
    template: _.template($('#choice-list-template').html()),
  });

  console.log(choiceView.model);

  // game.addPlayerPersonas(choiceList.list);


  var player1 = new Player();


  player1.setMark(game.playerPersonas.markImages.bugs);


  var player2 = new Player();
  // player2.setName(player2.names.roadrunner);
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
  
  choiceView.render(); 
  board.render(); 
  p1.render();  
  


  // var choiceP1 = choiceView.promptPickCharacter();



  // player1.setName(pickP1.name);
  // p1.render();
  // console.log(player1.name);

  // var choiceP1 = choiceView.pickCharacter(); 
});    
