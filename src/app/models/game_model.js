import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';

const Game = Backbone.Model.extend({
  defaults: {
    winStatus: "in progress",
    player1: '',
    player2: '',
    currentPlayer: '',
    playCounter: 0,
    board: ''
  }, 

  initialize: function(options) {
    this.board = new Board();
    this.set("player1", options.player1);
    this.set("player2", options.player2);
    console.log('new game! ' + this.get("player1").attributes.name);  
    return this;
  }, 

// setPlayers: function(options) {
//   this.set("player1", options.player1);
//   this.player1.setMark('X');
//   this.set("player2", options.player2);
//   this.player2.setMark('O');
//   this.set("currentPlayer", this.player1);
//   },
      
setCurrentPlayer: function( player ) {
  if (player == "") 
    {
      throw 42
    } 
  else 
    {   
      this.set("currentPlayer", player);
    };
  }, 
}); 

export default Game;

