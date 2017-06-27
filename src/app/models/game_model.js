import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';

const Game = Backbone.Model.extend({
  defaults: function() {
    return {
    winStatus: 'in progress',
    player1: null,
    player2: null,
    currentPlayer: null,
    // playCounter: 0,
    board: null
    };
  }, 

  events: {},

  initialize: function() {
    this.board = new Board();
    return this;
  }, 
  
  addPlayers: function(player1, player2=null) {
    this.player1 = player1;
    this.player2 = player2;
  },

  setCurrentPlayer: function( player, firstPlay=false ) { 
    this.currentPlayer = player;
    if (!firstPlay)
    {
      this.board.playCounter += 1;
    }
    },

  returnWinStatus: function() {
    return this.get('winStatus');
},

}); 


export default Game;

