import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';
import ChoiceList from 'app/models/choice_list_model';

const Game = Backbone.Model.extend({
  defaults: 
  {
    winStatus: 'in progress',
    winner: null,
    playerPersonas: null,
    player1: null,
    player2: null,
    currentPlayer: null,
    playCounter: 0,
    board: null,
  }, 

  events: {
  },

  initialize: function() {
    this.board = new Board();
    this.board.parent = this;
    this.playerPersonas = new ChoiceList();
    this.playerPersonas.parent = this;
    this.playCounter = 0;
    return this;
  }, 

  // addPlayerPersonas: function(choiceList) {
  //   this.playerPersonas = choiceList;
  // },
  
  addPlayers: function(player1, player2=null) {
    this.player1 = player1;
    this.player2 = player2;
  },

  // namePlayer: function(player, name) {
  //   if (player = this.player1)
  //   {
  //     player1.setName(name);
  //   }
  //   else {
  //     player2.setName(name);
  //   }
  // },

  setCurrentPlayer: function(player) { 
    this.currentPlayer = player;
    },

  setWinner: function(player) {
    this.winner = player;
  },

  setWinStatus: function(status) {
    this.set('winStatus', status);
  },

  checkWinStatus: function(row, col, mark) {
    var rowStatus = this.board.reportMatch(row, 'row', mark);
    var colStatus = this.board.reportMatch(col, 'col', mark);
    var leftDiagonalStatus = this.board.reportMatch(0, 'leftDiagonal', mark);
    var rightDiagonalStatus = this.board.reportMatch(0, 'rightDiagonal', mark);
    if (rowStatus == true || colStatus == true || leftDiagonalStatus == true || rightDiagonalStatus == true)
    {
      var status = `${this.currentPlayer.name} won!`;
      this.set('winStatus', status);
    }  
    return this.returnWinStatus();
  }, 

  returnWinStatus: function() {
    return this.get('winStatus');
  },

  takeTurns: function() {
    if (this.currentPlayer == this.player1) 
    {
      this.currentPlayer = this.player2;
    } 
    else
    {
      this.currentPlayer = this.player1;
    };
    return true;
  },

}); 


export default Game;

