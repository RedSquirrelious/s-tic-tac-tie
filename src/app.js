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


$(document).ready(function() {

  var game = new Game();
  var board = new GameView(   
    {   
      el: $('#game'),
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

  

  var player1 = new Player();
  var player2 = new Player();


  game.addPlayers(player1, player2);
  game.setCurrentPlayer(player1);
   
  choiceView.promptPickCharacter(player1);
 
  var p1 = new PlayerView({
    el: $('#player-list'),
    template: _.template($('#player-list-template').html()),
    player1: player1,
    player2: player2   
  });
  
 
  board.render(); 
  choiceView.render(); 
  p1.render();

});    
