import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Player from 'app/models/player_model';
import Game from 'app/models/game_model';

const GameView = Backbone.View.extend({
  
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render );
    this.currentGame = options.currentGame;
  },

  events: { 
  'click .square': 'markSquare'
  },

  render: function() {
    var that = this;
    this.delegateEvents();
    return this;
  },

  markImages: {
    grass: "images/squirrel-grass.jpg",
    rocks: "images/squirrel-rocks.jpg",
    snow: "images/squirrel-snow.jpg",
    bugs: "images/Bugs_Bunny.png",
    elmer: "images/Elmer_Fudd.gif",
    sam: "images/Yosemite_Sam.png",
    daffy: "images/Daffy_Duck.png",
    porky: "images/Porky_Pig.png",
    marvin: "images/Marvin_the_Martian.png",
    coyote: "images/Wile_E._Coyote.png",
    roadrunner: "images/Roadrunner.png"
  },

  markSquare: function(event) {
    var that = this;
    if (this.currentGame.returnWinStatus() != 'in progress')
    {
      alert("This game is already over!");
    }
    else
    {
      if ($(event.currentTarget).has('.mark').length)
      { 
        alert("This Square Already Has a Mark!  Try Another Square!"); 
      } 
      else 
      { 
        var squareElement = '#' + event.target.id; 
        $(squareElement).append("<div class='mark'><img src=" + this.currentGame.currentPlayer.mark + "></div>");
        var row = event.target.id[3];
        var col = event.target.id[7];
        this.addMarkToSpace(row, col, this.currentGame.currentPlayer.mark);
        this.checkWin(row, col, this.currentGame.currentPlayer.mark);
        this.takeTurns();
      };
    }
  },

  takeTurns: function() {
    if (this.currentGame.currentPlayer == this.currentGame.player1) 
    {
      this.currentGame.currentPlayer = this.currentGame.player2;
    } 
    else
    {
      this.currentGame.currentPlayer = this.currentGame.player1;
    };
  },

  addMarkToSpace: function(row, col, mark) {
    var space = this.currentGame.board.grid[row][col];
    space.setMark(mark);
    this.currentGame.playCounter += 1;
  },

  checkWin: function(row, col, mark) {
    if (this.currentGame.playCounter >= 5)
    {
      this.currentGame.checkWinStatus(row, col, mark)
      console.log(`Counter: ${this.currentGame.playCounter}`);
    }
    if (this.currentGame.returnWinStatus() != 'in progress')
    {
      alert(this.currentGame.returnWinStatus());
    }
  } 
});

export default GameView;