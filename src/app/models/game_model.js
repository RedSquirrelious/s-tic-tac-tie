import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Board from 'app/models/board_model';
import Player from 'app/models/player_model';

const Game = Backbone.Model.extend({
  defaults: 
  // function() {
  //   return 
  {
    winStatus: 'in progress',
    player1: null,
    player2: null,
    currentPlayer: null,
    playCounter: 0,
    board: null
    // };
  }, 

  events: {},

  initialize: function() {
    this.board = new Board();
    this.playCounter = 0;
    return this;
  }, 
  
  addPlayers: function(player1, player2=null) {
    this.player1 = player1;
    this.player2 = player2;
  },

  setCurrentPlayer: function(player) { 
    this.currentPlayer = player;
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

  takeTurns: function(row, col, firstPlay=false ) {
    var space = this.board.grid[row][col];
    space.setMark(this.currentPlayer.mark);
    var status = this.checkWinStatus(row, col);

    if (status == 'in progress')
    {
      if (this.currentPlayer == this.player1)
      {
        this.setCurrentPlayer(this.player2);
      }
      else
      {
        this.setCurrentPlayer(this.player1);
      }

      if (firstPlay)
      {
        this.set('playCounter', 1);
      }
      else
      {
        var count = this.get('playCounter');
        this.set('playCounter', count + 1);
      }
    }

  },

}); 


export default Game;

