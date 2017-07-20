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
    this.fillSquare('div.mark');
  },

    fillSquare: function(item) {
    var fillClass = ($(item).height() > $(item).width()) 
    ? 'fillheight'
    : 'fillwidth';
    $(item).find('img').addClass(fillClass);
    // console.log(item);
  },


  // fillSquare: function() {
  //   var fillClass = ($('div.mark').height() > $('div.mark').width()) 
  //   ? 'fillheight'
  //   : 'fillwidth';
  //   $('div.mark').find('img').addClass(fillClass);
  // },

  //   fillSquare: function() {
  //   $('div.mark').each(function() {
  //   console.log($(this).width());
  //   console.log($(this).height());
  //   // var fillClass = 'fillsomething';
  //   var fillClass = ($(this).height() > $(this).width()) 
  //   ? 'fillheight'
  //   : 'fillwidth';
  //   $(this).find('img').addClass(fillClass);
  //   });
  // },

  // markSquare: function(event) {
  //   var that = this;
  //   if (this.currentGame.returnWinStatus() != 'in progress')
  //   {
  //     alert("This game is already over!");
  //   }
  //   else
  //   {
  //     if ($(event.currentTarget).has('.mark').length)
  //     { 
  //       alert("This Square Already Has a Mark!  Try Another Square!"); 
  //     } 
  //     else 
  //     { 
  //       var squareElement = '#' + event.target.id; 
  //       $(squareElement).append("<div class='mark'><img src=" + this.currentGame.currentPlayer.mark + "></div>");
  //       var row = event.target.id[3];
  //       var col = event.target.id[7];
  //       this.addMarkToSpace(row, col, this.currentGame.currentPlayer.mark);
  //       this.checkWin(row, col, this.currentGame.currentPlayer.mark);
  //       this.takeTurns();
  //     };
  //   }
  // },

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