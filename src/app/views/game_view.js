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
  'click .square': 'play'
  },

  render: function() {
    var that = this;
    this.delegateEvents();
    return this;
  },

  winImage: {
    won: "images/winner.jpg"
  },

  markImages: {
    grass: "images/squirrel-grass.jpg",
    rocks: "images/squirrel-rocks.jpg",
    snow: "images/squirrel-snow.jpg",
    bugs: "images/Bugs_Bunny.jpg",
    elmer: "images/Elmer_Fudd.jpg",
    sam: "images/Yosemite_Sam.jpg",
    daffy: "images/Daffy_Duck.jpg",
    porky: "images/Porky_Pig.jpg",
    marvin: "images/Marvin_the_Martian.jpg",
    coyote: "images/Wile_E._Coyote.jpg",
    roadrunner: "images/Roadrunner.jpg"
  },

  play: function(event) {
    var that = this;
    if (this.currentGame.returnWinStatus() != 'in progress')
    {
      alert("This game is already over!");
    }
    else
    {
      if ($(event.currentTarget).has('.mark').length)
      { 
        alert("This square already has a mark!  Try another square!"); 
      } 
      else 
      { 
        this.markSquare(event.target.id);
        var row = event.target.id[3];
        var col = event.target.id[7];
        this.addMarkToSpace(row, col, this.currentGame.currentPlayer.mark);
        this.checkWin(row, col, this.currentGame.currentPlayer.mark);
        this.takeTurns();
      };
    }
  },

  markSquare: function(input) {
    console.log($(input));
    var squareElement = '#' + input; 
    $(squareElement).append("<div class='mark'><img src=" + this.currentGame.currentPlayer.mark + "></div>");
    this.fillSquare('div.mark', 'img');
  },

    fillSquare: function(container, item) {
    var fillClass = ($(container).height() > $(container).width()) 
    ? 'fillheight'
    : 'fillwidth';
    $(container).find(item).addClass(fillClass);
    // console.log(item);
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
      // alert(this.currentGame.returnWinStatus());
      this.proclaimWin();
    }
  }, 

  proclaimWin: function() {
    this.currentGame.setWinner(this.currentGame.currentPlayer);
    this.highlightWinner(this.currentGame.currentPlayer);
    $('#row2').append(`<img class='overlay' src=${this.winImage.won}>`);
  },

  highlightWinner: function(winner) {
    if (winner == this.currentGame.player1)
    {
      $('#player1').addClass('winner');
    }
    else
    {
      $('#player2').addClass('winner');
    }
  }, 
});

export default GameView;